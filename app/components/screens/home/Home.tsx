import Layout from '@/components/layout/Layout'
import { Button, Table } from 'antd'
import { FC, useEffect, useState } from 'react'
import { columns } from './table/TableColumns'
import { data } from './table/TableData'
import { IDataItem } from './table/table.interface'

const perPage = 10

const Home: FC = () => {
	const [page, setPage] = useState<number>(1)
	const [dataSource, setDataSource] = useState<IDataItem[]>([])
	const totalItems = data.length
	const totalPages = Math.ceil(totalItems / perPage)
	const offset = (page - 1) * perPage

	useEffect(() => {
		const paginatedData = data.slice(offset, offset + perPage)
		setDataSource(paginatedData)
	}, [page])

	return (
		<Layout>
			{dataSource.length > 0 ? (
				<>
					<Table columns={columns} dataSource={dataSource} pagination={false} />
					<p>
						Страница {page} из {totalPages}
					</p>
					<Button onClick={() => setPage(page - 1)} disabled={page === 1}>
						Назад
					</Button>
					<Button
						onClick={() => setPage(page + 1)}
						disabled={page === totalPages}
					>
						Вперед
					</Button>
				</>
			) : (
				<p>Нет данных</p>
			)}
		</Layout>
	)
}

export default Home
