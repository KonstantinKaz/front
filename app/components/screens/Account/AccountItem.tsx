import { IAccount } from "@/shared/transaction.types";
import { FC } from "react";

import styles from "./Account.module.scss";

const AccountItem: FC<IAccount> = ({ account }) => (
	<div className={styles.account__item} key={account.id}>
		<p>Account ID: {account.id}</p>
		{account.title && <p>Title: {account.title}</p>}
		{account.balance && <p>Balance: {account.balance}</p>}
		{/* {account.balance > 0 && <p>Balance: {account.balance}</p>} */}
	</div>
);

export default AccountItem;
