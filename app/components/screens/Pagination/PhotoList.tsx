import { FC } from 'react'

import { IPhoto } from '@/shared/IPhoto.interface'
import PhotoItem from './PhotoItem'

const PhotoList: FC<IPhoto> = ({ photos }) => {
	return (
		<div>
			{photos.map((photo) => (
				<PhotoItem key={photo.id} photo={photo} />
			))}
		</div>
	)
}

export default PhotoList
