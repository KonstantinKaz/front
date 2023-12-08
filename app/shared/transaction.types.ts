export interface IUser {
	id?: string
	username: string
	password: string
	email: string
}

export const UserModel = {
	username: '',
	password: '',
	email: '',
}

export interface ICategory {
	id: string
	user: IUser
	title: string
	type: 'income' | 'expense' | 'transfer'
}

export const CategoryModel = {
	id: '',
	user: {} as IUser,
	title: '',
	type: 'income',
}

export interface IAccount {
	id: string
	user: IUser
	title: string
	balance: number
}

export interface ITransaction {
	id: string
	user: IUser
	account?: IAccount
	transaction_type: 'Доход' | 'Расход' | 'Перевод'
	amount: number
	category: ICategory | null
	date?: string
	description?: string
}
