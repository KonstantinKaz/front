import Image from 'next/image'
import { FC } from 'react'
import { IPhoto } from './Photo.interface'

const Photo: FC<{ photo: IPhoto }> = ({ photo }) => (
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
)

export default Photo
