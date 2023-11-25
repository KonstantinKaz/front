import { FC } from 'react'
import Logo from './logo/Logo'

import styles from '../Layout.module.scss'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<Logo />
			<h1>erufhrjf</h1>
		</div>
	)
}

export default Header
