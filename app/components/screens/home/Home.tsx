import Layout from '@/components/layout/Layout'
import { Table } from 'antd'
import { FC } from 'react'
import { columns } from './table/TableColumns'
import { data } from './table/TableData'

const Home: FC = () => {
	// return (
	// 	<Layout>
	// 		<Table
	// 			columns={columns}
	// 			dataSource={data}
	// 			pagination={{ pageSize: 10 }}
	// 		/>
	// 	</Layout>
	// )

	return (
		<Layout>
			{data.length > 0 ? (
				<Table
					columns={columns}
					dataSource={data}
					pagination={{ pageSize: 10 }}
				/>
			) : (
				<p>Нет данных</p>
			)}
		</Layout>
	)
}

export default Home
