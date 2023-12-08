import { logout } from '@/services/auth.service'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import Logo from './logo/Logo'

import styles from '../Layout.module.scss'

const Header: FC = () => {
	const [authenticated, setAuthenticated] = useState(false)

	useEffect(() => {
		const token = Cookies.get('token')
		setAuthenticated(!!token)
	}, [])

	const handleLogout = () => {
		logout()
	}

	return (
		<div className={styles.header}>
			<Logo />
			<div className={styles.header__auth}>
				{authenticated ? (
					<div className={styles.header__auth}>
						<Link className={styles.header__item} href="/profile">
							Профиль
						</Link>
						<button className={styles.header__item} onClick={handleLogout}>
							Выйти
						</button>
					</div>
				) : (
					<Link className={styles.header__item} href="/auth">
						Зарегистрироваться/Войти
					</Link>
				)}
			</div>
		</div>
	)
}

export default Header
