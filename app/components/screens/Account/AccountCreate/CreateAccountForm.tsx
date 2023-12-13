import { IAccount } from '@/shared/transaction.types'
import { ChangeEvent, FC, FormEvent } from 'react'

interface CreateAccountFormProps {
	formData: IAccount
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
	onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const CreateAccountForm: FC<CreateAccountFormProps> = ({
	formData,
	onChange,
	onSubmit,
}) => {
	return (
		<form onSubmit={onSubmit} className="mt-4">
			<div className="mb-4">
				<label
					htmlFor="title"
					className="block text-gray-700 text-sm font-bold mb-2"
				>
					Account Name:
				</label>
				<input
					type="text"
					id="title"
					name="title"
					value={formData.title}
					onChange={onChange}
					required
					className="border border-gray-300 p-2 w-full text-gray-700 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
				/>
			</div>
			<button
				type="submit"
				className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
			>
				Create Account
			</button>
		</form>
	)
}

export default CreateAccountForm
