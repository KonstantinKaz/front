// transaction.service.ts
import { getTransactionsUrl } from '@/config/api.config'
import { ITransaction } from '@/shared/transaction.types'
import axios from 'axios'
import Cookies from 'js-cookie'

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
			throw error
		}
	},

	async create(data: ITransaction) {
		try {
			const jwtToken = Cookies.get('token')
			console.log('Отправка запроса на создание транзакции:', data)
			const response = await axios.post<ITransaction[]>(
				getTransactionsUrl('/'),
				data,
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${jwtToken}`,
						'Content-Type': 'application/json',
						'X-XSRF-TOKEN': jwtToken,
					},
				}
			)
			console.log('Ответ от сервера:', response.data)
			return response.data
		} catch (error) {
			console.error('Ошибка при отправке данных о создании:', error)
			throw error
		}
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
