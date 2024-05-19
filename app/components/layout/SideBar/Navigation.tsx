import Link from 'next/link'
import { FC } from 'react'
import styles from '../Layout.module.scss'

const Navigation: FC = () => {
	return (
		<nav className={styles.sidebar}>
			<Link className={styles.sidebar__item} href="/about">
				О нас
			</Link>
			<Link className={styles.sidebar__item} href="/transaction">
				Транзакции
			</Link>
			<Link className={styles.sidebar__item} href="/category">
				Категории
			</Link>
			<Link className={styles.sidebar__item} href="/pagination">
				Динамическая пагинация
			</Link>
		</nav>
	)
}

export default Navigation
