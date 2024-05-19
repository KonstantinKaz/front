import { AccountService } from '@/services/account.service'
import { IAccount } from '@/shared/transaction.types'
import { FC, useEffect, useState } from 'react'
import CreateCategory from '../Category/CategoryCreate/CreateCategory'
import AccountItem from './AccountItem'

import styles from './Account.module.scss'
import CreateAccount from './AccountCreate/CreateAccount'

const Account: FC = () => {
	const [accounts, setAccounts] = useState<IAccount[]>([])
	const [isFormOpen, setIsFormOpen] = useState(false)

	const fetchData = async () => {
		try {
			const response = await AccountService.getAll()
			console.log(response)
			const results = response.results || []
			console.log(results)
			setAccounts(results)
		} catch (error) {
			console.error('Error fetching Accounts:', error)
			setAccounts([])
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const handleFormToggle = () => {
		// Инвертируем состояние формы при нажатии на кнопку
		setIsFormOpen((prevIsFormOpen) => !prevIsFormOpen)
	}

	const handleAccountAdded = (newAccount: IAccount) => {
		// Обновляем список счетов после успешного добавления нового счета
		setAccounts((prevAccounts) => [newAccount, ...prevAccounts])
		// Закрываем форму после успешного добавления
		setIsFormOpen(false)
	}

	return (
		<div className={styles.account}>
			<div className="flex justify-between mx-5">
				<h1>Счета</h1>
				<button onClick={handleFormToggle}>Добавить счет</button>
				{isFormOpen && <CreateAccount onAccountAdded={handleAccountAdded} />}
			</div>
			<div className={styles.account__items}>
				{accounts.map((account) =>
					account.id ? <AccountItem key={account.id} account={account} /> : null
				)}
				{accounts.length === 0 && <p>Счетов нет</p>}
			</div>
		</div>
	)
}

export default Account
