import { TransactionService } from '@/services/transaction.service'
import { useEffect, useState } from 'react'
import TransactionItem from './TransactionItem'
import styles from './Transaction.module.scss'

const TransactionList = () => {
	const [transactions, setTransactions] = useState([])

	const fetchData = async () => {
		try {
			const response = await TransactionService.getAll()
			console.log(response)
			const results = response.results || []
			console.log(results)
			setTransactions(results)
		} catch (error) {
			console.error('Error fetching transactions:', error)
			setTransactions([])
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div>
			<h1>Транзакции</h1>
			<div className={styles.transaction}>
				{transactions.map((transaction) => (
					<TransactionItem key={transaction.id} transaction={transaction} />
				))}
				{transactions.length === 0 && <p>Транзакций нет.</p>}
			</div>
		</div>
	)
}

export default TransactionList
