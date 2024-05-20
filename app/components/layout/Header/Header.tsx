import { logout } from "@/services/auth.service";
import Cookies from "js-cookie";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Logo from "./logo/Logo";

import styles from "../Layout.module.scss";

const Header: FC = () => {
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		const token = Cookies.get("token");
		setAuthenticated(!!token);
	}, []);

	const handleLogout = () => {
		logout();
	};

	return (
		<header role="banner" className={styles.header}>
			<Logo />

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
				<Link className={styles.header__auth} href="/auth">
					Зарегистрироваться/Войти
				</Link>
			)}
		</header>
	);
};

export default Header;
