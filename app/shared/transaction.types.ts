export interface IUser {
	id?: string
	username: string
	password: string
	email: string
}

export interface ICategory {
	id: string
	user: IUser
	title: string
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
