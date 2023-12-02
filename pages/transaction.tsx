import Layout from '@/components/layout/Layout'
import Transaction from '@/components/screens/Transaction/Transaction'
import { FC } from 'react'

const TransactionsPage: FC = () => {
	return (
		<Layout>
      <Transaction />
		</Layout>
	)
}

export default TransactionsPage
