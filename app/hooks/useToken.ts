import Cookies from 'js-cookie'

export const useToken = () => {
	const getToken = () => Cookies.get('token')

	return {
		getToken,
	}
}
