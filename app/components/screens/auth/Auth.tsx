// LoginPage.js

import { login, logout } from '@/services/auth.service'
import { useState } from 'react'

const LoginPage = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = async () => {
		try {
			const data = await login({ username, password })
			console.log('Login successful', data)
			// Redirect or handle success as needed
		} catch (error) {
			console.error('Login failed', error)
			// Handle error (show error message, etc.)
		}
	}

	const handleLogout = () => {
		logout()
		// Perform any additional actions after logout if needed
	}

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="bg-white p-8 shadow-md rounded-md w-96">
				<h1 className="text-2xl font-bold mb-4">Login</h1>
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
				<button
					className="bg-blue-500 text-white p-2 rounded-md w-full"
					onClick={handleLogin}
				>
					Log in
				</button>
				<button className="mt-4 text-sm text-blue-500" onClick={handleLogout}>
					Log out
				</button>
			</div>
		</div>
	)
}

export default LoginPage
