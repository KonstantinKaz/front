// TransactionItem.tsx
import { ICategory } from '@/shared/transaction.types'
import { FC } from 'react'

import styles from './Category.module.scss'

const TransactionItem: FC<ICategory> = ({ category }) => (
	<div className={styles.category__item} key={category.id}>
		<p>Transaction ID: {category.id}</p>
		{category.title && <p>Title: {category.title}</p>}
		{category.type && <p>Type: {category.type}</p>}
	</div>
)

export default TransactionItem
