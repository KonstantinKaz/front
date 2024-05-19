import Layout from '@/components/layout/Layout'
import TransactionList from '@/components/screens/Transaction/Transaction'
import { FC } from 'react'

const TransactionsPage: FC = () => {
	return (
		<Layout>
      <TransactionList />
		</Layout>
	)
}

export default TransactionsPage
