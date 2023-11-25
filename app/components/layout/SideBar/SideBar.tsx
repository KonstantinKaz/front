import Link from 'next/link'
import { FC } from 'react'

import styles from '../Layout.module.scss'

const SideBar: FC = () => {
	return (
		<nav className={styles.sidebar}>
			<Link className={styles.sidebar__item} href="/">Главная</Link>
			<Link className={styles.sidebar__item} href="/about">Цели</Link>
			<Link className={styles.sidebar__item} href="/contact">Транзакции</Link>
			<Link className={styles.sidebar__item} href="/contact">Бюджеты</Link>
		</nav>
	)
}

export default SideBar
