import { TransactionService } from '@/services/transaction.service'
import { useEffect, useState } from 'react'

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
			<h1>Transactions</h1>
			{transactions.map((transaction) => (
				<div key={transaction.id}>
					<p>Transaction ID: {transaction.id}</p>
					<p>Description: {transaction.description}</p>
					<p>Amount: {transaction.amount}</p>
				</div>
			))}
			{transactions.length === 0 && <p>No transactions available.</p>}
		</div>
	)
}

export default TransactionList
