import { ColumnsType } from 'antd/es/table'
import { IDataItem } from './table.interface'

export const columns: ColumnsType<IDataItem> = [
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
