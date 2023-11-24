import Link from 'next/link'
import { FC } from 'react'

import styles from '../Layout.module.scss'

const SideBar: FC = () => {
	return (
		<nav className={styles.sidebar}>
			<Link className={styles.sidebar__item} href="/">Home</Link>
			<Link className={styles.sidebar__item} href="/about">About</Link>
			<Link className={styles.sidebar__item} href="/contact">Contact</Link>
		</nav>
	)
}

export default SideBar
