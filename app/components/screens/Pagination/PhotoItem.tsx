import { IPhoto } from '@/shared/IPhoto.interface'
import { FC } from 'react'

// components/PhotoItem.js
const PhotoItem: FC<IPhoto> = ({ photo }) => {
	return <img src={photo.thumbnailUrl} alt={photo.title} />
}

export default PhotoItem
