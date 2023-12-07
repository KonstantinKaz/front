export interface IUser {
	id: string
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
	transaction_type?: 'Доход' | 'Расход' | 'Перевод'
	amount?: number
	income_category?: IIncomeCategory | null
	expense_category?: IExpenseCategory | null
	date?: string
	description?: string
}
