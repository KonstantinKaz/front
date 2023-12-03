import { photoApi } from '@/config/api.config'
import axios from 'axios'
import { FC, useEffect, useRef, useState } from 'react'
import Photo from './Photo'
import { IPhoto } from './Photo.interface'

const perPage = 10

const TestPagination: FC = () => {
	const [photos, setPhotos] = useState<IPhoto[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const [fetching, setFetching] = useState(true)
	const [totalCount, setTotalCount] = useState(0)
	const loaderRef = useRef<HTMLDivElement | null>(null)

	const fetchPhotos = async () => {
		try {
			const response = await axios.get(
				`${photoApi}?_limit=${perPage}&_page=${currentPage}`
			)
			setPhotos((prevPhotos) => [...prevPhotos, ...response.data])
			setTotalCount(response.headers['x-total-count'])
		} catch (error) {
			console.error('Error fetching photos:', error)
		} finally {
			setFetching(false)
		}
	}

	useEffect(() => {
		fetchPhotos()
	}, [currentPage])

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1,
		}

		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			const target = entries[0]

			if (target.isIntersecting && !fetching && photos.length < totalCount) {
				setFetching(true)
				setCurrentPage((prevPage) => prevPage + 1)
			}
		}

		const observer = new IntersectionObserver(
			handleIntersection,
			observerOptions
		)

		if (loaderRef.current) {
			observer.observe(loaderRef.current)
		}

		return () => {
			if (loaderRef.current) {
				observer.unobserve(loaderRef.current)
			}
		}
	}, [loaderRef, fetching, photos.length, totalCount])

	return (
		<>
			<h1>Photo Gallery</h1>
			{photos.map((photo) => (
				<Photo key={photo.id} photo={photo} />
			))}
			<div ref={loaderRef}>{fetching && <p>Loading...</p>}</div>
		</>
	)
}

export default TestPagination
