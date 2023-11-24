import { ColumnsType } from 'antd/es/table'

interface DataItem {
  key: string;
  title: string;
  amount: number;
  goal: string;
}

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
