import { Table } from 'antd'
import axios from 'axios'
import { FC, useEffect } from 'react'
import { columns } from './table/TableColumns'
import { data } from './table/TableData'
import Layout from '@/components/layout/Layout'

const token =
	'O5%2FYViaep7fV915GhvNxO5aLFCbbTFhYlezXjfzY3kPxMTZgPEFWacFk%2BbO2lmIVpB4FZl3gw4Gl4vqwmhv0ZgOTk7d1eWKMJ3aGRUdl304lDqTogWdO58YrPKXM%2B7Jen7J1tsNJ8an0pVaM3JB9lLdC7YCPDTNtDjFVPUCL0Ks%3D'

const baseUrl = 'https://e.mospolytech.ru/old/lk_api.php/'

const Home: FC = () => {
	// const getStudents = async (page: string, perPage: string) => {
	// 	const response = await axios.get(
	// 		baseUrl +
	// 			`?getStudents&page=${page}
	// 	&perpage=${perPage}
	// 	&token=${token}`
	// 	)

	// 	return response.data
	// }
	// useEffect(() => (), [])
	// функция выполняется, когда [] пуст

	// useEffect(() => {
	// 	console.log(getStudents('1', '50'))
	// }, [])
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
