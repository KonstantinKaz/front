import fetchPhotos from '@/utils/fetchPhotos'
import { FC, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { IPhoto } from '@/shared/IPhoto.interface'
import PhotoList from './PhotoList'

const PhotoGallery: FC<IPhoto> = ({ initialPhotos }) => {
	const [photos, setPhotos] = useState(initialPhotos || [])
	const [page, setPage] = useState(1)
	const { ref, inView } = useInView({
		threshold: 0,
	})

	useEffect(() => {
		if (inView) {
			const loadMorePhotos = async () => {
				const nextPage = page + 1
				const newPhotos = await fetchPhotos(nextPage)
				setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos])
				setPage(nextPage)
			}
			loadMorePhotos()
		}
	}, [inView])

	return (
		<div>
			<h1>Photo Gallery</h1>
			{photos.length > 0 ? <PhotoList photos={photos} /> : <p>Loading...</p>}
			<div ref={ref} />
		</div>
	)
}

export default PhotoGallery
