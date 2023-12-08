import { IUser, UserModel } from '@/shared/transaction.types'
import React, { FC } from 'react'

interface LoginFormProps {
	user?: IUser
	setUser: React.Dispatch<React.SetStateAction<IUser>>
	handleLogin: () => void
	handleLogout: () => void
}

const LoginForm: FC<LoginFormProps> = ({
	user = UserModel,
	setUser,
	handleLogin,
	handleLogout,
}) => {
	const { username, password } = user

	return (
		<>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">
					Username:
				</label>
				<input
					className="border border-gray-300 p-2 w-full text-gray-700"
					type="text"
					value={username}
					onChange={(e) => setUser({ ...user, username: e.target.value })}
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
					onChange={(e) => setUser({ ...user, password: e.target.value })}
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
		</>
	)
}

export default LoginForm
