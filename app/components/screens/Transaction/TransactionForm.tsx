import { TransactionService } from '@/services/transaction.service'
import React, { ChangeEvent, FormEvent, useState } from 'react'

interface TransactionFormProps {
	onTransactionAdded: (transaction: any) => void
}

const TransactionForm: React.FC<TransactionFormProps> = ({
	onTransactionAdded,
}) => {
	const [formData, setFormData] = useState({
		user: '',
		transaction_type: 'Доход',
		amount: 0,
	})
	const [error, setError] = useState<string | null>(null)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevData) => ({ ...prevData, [name]: value }))
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		const token = localStorage.getItem('token')
		if (!token) {
			setError('Токен отсутствует в localStorage')
			return
		}

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		}

		try {
			const newTransaction = await TransactionService.create(formData, config)
			onTransactionAdded(newTransaction)

			setFormData({
				user: '',
				transaction_type: '',
				amount: 0,
			})

			console.log('Транзакция успешно добавлена:', newTransaction)
		} catch (error) {
			console.error('Ошибка при добавлении транзакции:', error)
			setError('Произошла ошибка при добавлении транзакции.')
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg"
		>
			<div className="mb-4">
			<label className="block text-gray-700 text-sm font-bold mb-2">
					Пользователь:
				</label>
				<input
					className="border border-gray-300 p-2 w-full text-gray-700"
					type="text"
					name="user"
					value={formData.user}
					onChange={handleChange}
				/>

				<label className="block text-gray-700 text-sm font-bold mb-2">
					Тип транзакции:
				</label>
				<input
					className="border border-gray-300 p-2 w-full text-gray-700"
					type="text"
					name="transaction_type"
					value={formData.transaction_type}
					onChange={handleChange}
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">
					Сумма:
				</label>
				<input
					className="border border-gray-300 p-2 w-full text-gray-700"
					type="number"
					name="amount"
					value={formData.amount}
					onChange={handleChange}
				/>
			</div>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<button
				type="submit"
				className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-700"
			>
				Добавить транзакцию
			</button>
		</form>
	)
}

export default TransactionForm
