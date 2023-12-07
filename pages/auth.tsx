import Layout from '@/components/layout/Layout'
import LoginPage from '@/components/screens/auth/Auth'
import RegistrationPage from '@/components/screens/auth/Registration'
import { FC } from 'react'

const AuthPage: FC = () => (
	<Layout>
		<LoginPage />
		<RegistrationPage />
	</Layout>
)
export default AuthPage
