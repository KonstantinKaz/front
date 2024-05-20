import { AccountService } from "@/services/account.service";
import { AccountModel, IAccount } from "@/shared/transaction.types";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import CreateAccountForm from "./CreateAccountForm";

interface CreateAccountProps {
	onAccountAdded: (account: IAccount) => void;
}

const CreateAccount: FC<CreateAccountProps> = ({ onAccountAdded }) => {
	const initialAccountState: IAccount = AccountModel as IAccount;
	const [formData, setFormData] = useState<IAccount>(initialAccountState);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const newAccount = await AccountService.create(formData);
			onAccountAdded(newAccount);
			setFormData(initialAccountState); // Reset to initial state
			console.log("Account successfully added:", newAccount);
		} catch (error) {
			console.error("Error while adding account:", error);
		}
	};

	return <CreateAccountForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />;
};

export default CreateAccount;
