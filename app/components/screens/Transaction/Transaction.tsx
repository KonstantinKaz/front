import { getTransactions } from '@/config/api.config'
import { useEffect, useState } from 'react'

const TransactionList = () => {
	const [transactions, setTransactions] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getTransactions()
				const results = response?.results || []

				if (Array.isArray(results) && results.length > 0) {
					setTransactions(results)
				} else {
					console.error(
						'Invalid response from the server: No or empty results array'
					)
					setTransactions([])
				}
			} catch (error) {
				console.error('Error fetching transactions:', error)
				setTransactions([])
			}
		}

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
