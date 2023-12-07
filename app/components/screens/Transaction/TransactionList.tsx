// import { TransactionService } from '@/services/transaction.service'
// import { useEffect, useState } from 'react'
// import TransactionItem from './TransactionItem'
// import styles from './Transaction.module.scss'

// const TransactionList = () => {
// 	const [transactions, setTransactions] = useState([])

// 	const fetchData = async () => {
// 		try {
// 			const response = await TransactionService.getAll()
// 			console.log(response)
// 			const results = response.results || []
// 			console.log(results)
// 			setTransactions(results)
// 		} catch (error) {
// 			console.error('Error fetching transactions:', error)
// 			setTransactions([])
// 		}
// 	}

// 	useEffect(() => {
// 		fetchData()
// 	}, [])

// 	return (
// 		<div>
// 			<h1>Транзакции</h1>
// 			<div className={styles.transaction}>
// 				{transactions.map((transaction) => (
// 					<TransactionItem key={transaction.id} transaction={transaction} />
// 				))}
// 				{transactions.length === 0 && <p>Транзакций нет.</p>}
// 			</div>
// 		</div>
// 	)
// }

// export default TransactionList

import { TransactionService } from '@/services/transaction.service'
import React, { useEffect, useState } from 'react'
import styles from './Transaction.module.scss'
import TransactionForm from './TransactionForm'
import TransactionItem from './TransactionItem'

const TransactionList: React.FC = () => {
	const [transactions, setTransactions] = useState([])

	const fetchData = async () => {
		try {
			const response = await TransactionService.getAll()
			const results = response.results || []
			setTransactions(results)
		} catch (error) {
			console.error('Ошибка при получении транзакций:', error)
			setTransactions([])
		}
	}

	const handleTransactionAdded = (newTransaction) => {
		setTransactions((prevTransactions) => [newTransaction, ...prevTransactions])
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div>
			<h1>Транзакции</h1>
			<TransactionForm onTransactionAdded={handleTransactionAdded} />
			<div className={styles.transaction}>
				{transactions.map((transaction) => (
					<TransactionItem key={transaction.id} transaction={transaction} />
				))}
				{transactions.length === 0 && <p>Транзакций нет</p>}
			</div>
		</div>
	)
}

export default TransactionList
