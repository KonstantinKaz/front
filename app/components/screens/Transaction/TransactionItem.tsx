// TransactionItem.tsx
import { ITransaction } from "@/shared/transaction.types";
import { FC } from "react";

import styles from "./Transaction.module.scss";

const TransactionItem: FC<ITransaction> = ({ transaction }) => (
	<div className={styles.transaction__item} key={transaction.id}>
		<p>Transaction ID: {transaction.id}</p>
		{transaction.description && <p>Description: {transaction.description}</p>}
		{transaction.amount && <p>Amount: {transaction.amount}</p>}
		{transaction.transaction_type && <p>Transaction Type: {transaction.transaction_type}</p>}
		{transaction.transaction_type === "Доход" && transaction.income_category && (
			<p>Income Category: {transaction.income_category.title}</p>
		)}
		{transaction.transaction_type === "Расход" && transaction.expense_category && (
			<p>Expense Category: {transaction.expense_category.title}</p>
		)}
		{transaction.date && <p>Date: {transaction.date}</p>}
	</div>
);

export default TransactionItem;
