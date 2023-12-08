// components/auth/RegisterForm.tsx
import { IUser } from '@/shared/transaction.types'
import { FC } from 'react'

interface RegisterFormProps {
	user: IUser
	setUser: React.Dispatch<React.SetStateAction<IUser>>
	handleRegister: () => void
}

const RegisterForm: FC<RegisterFormProps> = ({
	user = { username: '', password: '', email: '' },
	setUser,
	handleRegister,
}) => {
	const { username, password, email } = user

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
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">
					Email:
				</label>
				<input
					className="border border-gray-300 p-2 w-full text-gray-700"
					type="email"
					value={email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
				/>
			</div>
			<button
				className="bg-green-500 text-white p-2 rounded-md w-full"
				onClick={handleRegister}
			>
				Register
			</button>
		</>
	)
}

export default RegisterForm

// import { IUser } from '@/shared/transaction.types'
// import { FC } from 'react'

// interface RegisterFormProps {
// 	user?: IUser // Добавлен знак вопроса, чтобы параметр стал необязательным
// 	setUser: React.Dispatch<React.SetStateAction<IUser>>
// 	handleRegister: () => void
// }

// const RegisterForm: FC<RegisterFormProps> = ({
// 	user = { username: '', password: '', email: '' },
// 	setUser,
// 	handleRegister,
// }) => {
// 	const { username, password, email } = user

// 	return (
// 		<>
// 			<div className="mb-4">
// 				<label className="block text-gray-700 text-sm font-bold mb-2">
// 					Username:
// 				</label>
// 				<input
// 					className="border border-gray-300 p-2 w-full text-gray-700"
// 					type="text"
// 					value={username}
// 					onChange={(e) => setUser({ ...user, username: e.target.value })}
// 				/>
// 			</div>
// 			<div className="mb-4">
// 				<label className="block text-gray-700 text-sm font-bold mb-2">
// 					Password:
// 				</label>
// 				<input
// 					className="border border-gray-300 p-2 w-full text-gray-700"
// 					type="password"
// 					value={password}
// 					onChange={(e) => setUser({ ...user, password: e.target.value })}
// 				/>
// 			</div>
// 			<div className="mb-4">
// 				<label className="block text-gray-700 text-sm font-bold mb-2">
// 					Email:
// 				</label>
// 				<input
// 					className="border border-gray-300 p-2 w-full text-gray-700"
// 					type="email"
// 					value={email}
// 					onChange={(e) => setUser({ ...user, email: e.target.value })}
// 				/>
// 			</div>
// 			<button
// 				className="bg-green-500 text-white p-2 rounded-md w-full"
// 				onClick={handleRegister}
// 			>
// 				Register
// 			</button>
// 		</>
// 	)
// }

// export default RegisterForm
