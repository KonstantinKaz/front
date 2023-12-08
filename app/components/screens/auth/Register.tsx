import { register } from '@/services/auth.service'
import { FC, useState } from 'react'
import RegisterForm from './RegisterForm'

const Register: FC = () => {
	const [user, setUser] = useState({
		username: '',
		password: '',
		email: '',
	})

	const handleRegister = async () => {
		try {
			const data = await register(user)
			console.log('Registration successful', data)
		} catch (error) {
			console.error('Registration failed', error)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="bg-white p-8 shadow-md rounded-md w-96">
				<h1 className="text-2xl font-bold mb-4">Register</h1>
				<RegisterForm
					user={user}
					setUser={setUser}
					handleRegister={handleRegister}
				/>
			</div>
		</div>
	)
}

export default Register
