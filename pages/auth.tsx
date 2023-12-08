import Layout from '@/components/layout/Layout'
import Login from '@/components/screens/auth/Login'
import Registration from '@/components/screens/auth/Register'
import { FC } from 'react'

const AuthPage: FC = () => (
	<Layout>
		<Login />
		<Registration />
	</Layout>
)
export default AuthPage
