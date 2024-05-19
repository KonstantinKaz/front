import { ICategory } from '@/shared/transaction.types'
import { FC } from 'react'

import styles from './Category.module.scss'

const getCategoryTypeName = (type: string) => {
	const typeMap: { [key: string]: string } = {
		income: 'Доход',
		expense: 'Расход',
		transfer: 'Перевод',
	}
	return typeMap[type] || type
}

const CategoryItem: FC<ICategory> = ({ category }) => (
	<div className={styles.category__item} key={category.id}>
		<p>Transaction ID: {category.id}</p>
		{category.title && <p>Title: {category.title}</p>}
		{category.type && <p>Type: {getCategoryTypeName(category.type)}</p>}
	</div>
)

export default CategoryItem
