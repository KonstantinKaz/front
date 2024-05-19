import { getCategoryUrl } from '@/config/api.config'
import { useToken } from '@/hooks/useToken'
import { ICategory } from '@/shared/transaction.types'
import axios from 'axios'

const { getToken } = useToken()

export const CategoryService = {
	async getAllCategories() {
		try {
			const jwtToken = getToken()

			const response = await axios.get<ICategory[]>(getCategoryUrl('/'), {
				withCredentials: true,
				headers: {
					Authorization: `Bearer ${jwtToken}`,
					'Content-Type': 'application/json',
				},
			})

			console.log(response.data)
			return response.data
		} catch (error) {
			console.error('Ошибка при получении категорий:', error)
			throw error
		}
	},

	async create(data: ICategory) {
		try {
			const jwtToken = getToken()

			console.log('Отправка запроса на создание категории:', data, jwtToken)
			const response = await axios.post<ICategory[]>(
				getCategoryUrl('/'),
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
			console.error('Ошибка при отправке данных о создании:', error)
			throw error
		}
	},
}
