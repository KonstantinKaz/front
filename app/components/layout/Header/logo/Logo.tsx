import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import LogoImage from '@/assets/images/logo/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<Image
				src={LogoImage}
				width={247}
				height={34}
				alt="Logo"
				draggable={false}
			/>
		</Link>
	)
}

export default Logo
