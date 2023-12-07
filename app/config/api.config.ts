// api.config.ts

export const photoApi = 'https://jsonplaceholder.typicode.com/photos'

export const API_URL = `${process.env.SERVER_URL}/api`

export const getTransactionsUrl = (string: string) =>
	`${API_URL}/transactions${string}`

export const getIncomeCategoryUrl = (string: string) =>
	`${API_URL}/income-categories${string}`

export const getExpenseCategoryUrl = (string: string) =>
	`${API_URL}/expense-categories${string}`

export const getCategoryUrl = (string: string) =>
	`${API_URL}/categories${string}`
