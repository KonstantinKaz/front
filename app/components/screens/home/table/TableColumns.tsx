import { ColumnsType } from 'antd/es/table'
import { DataItem } from './table.interface'


export const columns: ColumnsType<DataItem> = [
	{
		title: 'Название',
		dataIndex: 'title',
		key: 'title',
	},
	{
		title: 'Сумма',
		dataIndex: 'amount',
		key: 'amount',
	},
	{
		title: 'Цель',
		dataIndex: 'goal',
		key: 'goal',
	},
]
