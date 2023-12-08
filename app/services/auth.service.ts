import { API_URL } from '@/config/api.config'
import axios from '@/config/axios.config'
import { IUser } from '@/shared/transaction.types'

import Cookies from 'js-cookie'

export const login = async (credentials: IUser) => {
	try {
		const response = await axios.post(`${API_URL}/token/`, credentials)
		console.log('Login response:', response.data)

		Cookies.set('token', response.data.access)
		localStorage.setItem('token', response.data.access)

		return response.data
	} catch (error) {
		console.error('Login error:', error)
		throw error
	}
}

export const logout = () => {
	Cookies.remove('token')
	localStorage.removeItem('token')
}

export const register = async (userData: {
	username: string
	password: string
	email: string
}) => {
	try {
		const response = await axios.post(`${API_URL}/auth/users/`, userData)
		console.log('Registration response:', response.data)
		return response.data
	} catch (error) {
		console.error('Registration error:', error)
		throw error
	}
}
