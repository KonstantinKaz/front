// RegistrationPage.js

import { register } from '@/services/auth.service'
import { useState } from 'react'

const RegistrationPage = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')

	const handleRegister = async () => {
		try {
			const data = await register({ username, password, email })
			console.log('Registration successful', data)
			// Redirect or handle success as needed
		} catch (error) {
			console.error('Registration failed', error)
			// Handle error (show error message, etc.)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="bg-white p-8 shadow-md rounded-md w-96">
				<h1 className="text-2xl font-bold mb-4">Register</h1>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Username:
					</label>
					<input
						className="border border-gray-300 p-2 w-full text-gray-700"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Password:
					</label>
					<input
						className="border border-gray-300 p-2 w-full text-gray-700"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Email:
					</label>
					<input
						className="border border-gray-300 p-2 w-full text-gray-700"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<button
					className="bg-green-500 text-white p-2 rounded-md w-full"
					onClick={handleRegister}
				>
					Register
				</button>
			</div>
		</div>
	)
}

export default RegistrationPage
