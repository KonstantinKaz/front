export const photoApi = 'https://jsonplaceholder.typicode.com/photos'

// export const API_URL = `${process.env.APP_URL}/api`

// export const getTransactionsUrl = (string:string) => `/transactions${string}`
// export const getUsersUrl = (string:string) => `/users${string}`
// export const getArticlesUrl = (string:string) => `/articles${string}`
// export const getCommentsUrl = (string:string) => `/comments${string}`
// export const getActorsUrl = (string:string) => `/actors${string}`

// services/api.ts
import axios from 'axios'

const API_BASE_URL = 'http://127.0.0.1:8000/api'

export const getAccounts = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/accounts/`)
		return response.data
	} catch (error) {
		console.error('Error fetching accounts:', error)
		throw error
	}
}

export const getTransactions = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/transactions/`)
		console.log('Transaction data from server:', response.data) //Проверка приходит ли данные
		return response.data
	} catch (error) {
		console.error('Error fetching transactions:', error)
		throw error
	}
}

export const getIncomeCategories = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/income-categories/`)
		return response.data
	} catch (error) {
		console.error('Error fetching income categories:', error)
		throw error
	}
}

export const getExpenseCategories = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/expense-categories/`)
		return response.data
	} catch (error) {
		console.error('Error fetching expense categories:', error)
		throw error
	}
}
