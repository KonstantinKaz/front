import Layout from '@/components/layout/Layout'
import { Table } from 'antd'
import { FC } from 'react'
import { columns } from './table/TableColumns'
import { data } from './table/TableData'

const Home: FC = () => {
	return (
		<Layout>
			<Table
				columns={columns}
				dataSource={data}
				pagination={{ pageSize: 10 }}
			/>
		</Layout>
	)
}

export default Home
