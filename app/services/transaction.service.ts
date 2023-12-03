// transaction.service.ts
import { getTransactionsUrl } from '@/config/api.config'
import { ITransaction } from '@/shared/transaction.types'
import axios from 'axios'

export const TransactionService = {
	async getAll() {
		try {
			const response = await axios.get<ITransaction[]>(
				getTransactionsUrl('/'),
				{ withCredentials: true }
			)
			console.log(response.data)
			return response.data
		} catch (error) {
			console.error('Ошибка при получении транзакций:', error)
			throw error // перебросьте ошибку, чтобы вызывающий код мог ее обработать
		}
	},

	async create() {
		return axios.post<string>(getTransactionsUrl(''))
	},

	async getById(_id: string) {
		return axios.get<ITransaction>(getTransactionsUrl(`/${_id}`))
	},

	async update(_id: string, data: ITransaction) {
		return axios.put<string>(getTransactionsUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return axios.delete<string>(getTransactionsUrl(`/${_id}`))
	},
}
