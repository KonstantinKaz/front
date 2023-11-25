// components/layout/Layout.tsx
import { FC, PropsWithChildren } from 'react'
import Header from './Header/Header'
import styles from './Layout.module.scss'
import SideBar from './SideBar/SideBar'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<SideBar />
			<div className={styles.center}>{children}</div>
		</div>
	)
}

export default Layout
