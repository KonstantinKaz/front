import Layout from '@/components/layout/Layout'
import { photoApi } from '@/config/api.config'
import axios from 'axios'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { Photo } from './Photo.interface'

const perPage = 10

const TestPagination: FC = () => {
	const [photos, setPhotos] = useState<Photo[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const [fetching, setFetching] = useState(true)
	const [totalCount, setTotalCount] = useState(0)

	useEffect(() => {
		if (fetching) {
			axios
				.get(
					`${photoApi}?_limit=${perPage}&_page=${currentPage}`
				)
				.then((response) => {
					setPhotos([...photos, ...response.data])
					setCurrentPage((prevPage) => prevPage + 1)
					setTotalCount(response.headers['x-total-count'])
				})
				.finally(() => setFetching(false))
		}
	}, [fetching, currentPage, photos])

	useEffect(() => {
		const scrollHandler = () => {
			if (
				window.innerHeight + document.documentElement.scrollTop ===
					document.documentElement.offsetHeight &&
				photos.length < totalCount
			) {
				setFetching(true)
			}
		}

		document.addEventListener('scroll', scrollHandler)

		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [photos, totalCount])

	return (
		<Layout>
			{photos.map((photo) => (
				<div key={photo.id}>
					<div>
						{photo.id}. {photo.title}
					</div>
					<Image
						src={photo.url}
						alt="Placeholder Image"
						width={150}
						height={150}
					/>
				</div>
			))}
		</Layout>
	)
}

export default TestPagination
