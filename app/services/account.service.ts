import { getAccountUrl } from '@/config/api.config'
import { useToken } from '@/hooks/useToken'
import { IAccount } from '@/shared/transaction.types'
import axios from 'axios'

const { getToken } = useToken()

export const AccountService = {
	async getAll() {
		try {
			const jwtToken = getToken()

			const response = await axios.get<IAccount[]>(getAccountUrl('/'), {
				withCredentials: true,
				headers: {
					Authorization: `Bearer ${jwtToken}`,
					'Content-Type': 'application/json',
				},
			})

			console.log(response.data)
			return response.data
		} catch (error) {
			console.error('Ошибка при получении счетов:', error)
			throw error
		}
	},

	async create(data: IAccount) {
		try {
			const jwtToken = getToken()

			console.log('Отправка запроса на создание счета:', data, jwtToken)
			const response = await axios.post<IAccount[]>(
				getAccountUrl('/'),
				data,
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${jwtToken}`,
						'Content-Type': 'application/json',
					},
				}
			)

			console.log('Ответ от сервера:', response.data)
			return response.data
		} catch (error) {
			console.error('Ошибка при отправке данных о создании счета:', error)
			throw error
		}
	},
}
