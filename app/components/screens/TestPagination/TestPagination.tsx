import Layout from '@/components/layout/Layout'
import { photoApi } from '@/config/api.config'
import axios from 'axios'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'
import { IPhoto } from './Photo.interface'

const perPage = 10

const TestPagination: FC = () => {
	const [photos, setPhotos] = useState<IPhoto[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const [fetching, setFetching] = useState(true)
	const [totalCount, setTotalCount] = useState(0)
	const loaderRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
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
		<Layout>
			{photos.map((photo) => (
				<div key={photo.id}>
					<div>
						{photo.id}. {photo.title}
					</div>
					<Image
						src={photo.url}
						alt="Image"
						width={150}
						height={150}
						priority={true}
					/>
				</div>
			))}
			<div ref={loaderRef}>{fetching && <p>Loading...</p>}</div>
		</Layout>
	)
}

export default TestPagination
