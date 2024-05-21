import { ICategory } from "@/shared/transaction.types";
import { ChangeEvent, FC, FormEvent } from "react";

interface CreateCategoryFormProps {
	formData: ICategory;
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const CreateCategoryForm: FC<CreateCategoryFormProps> = ({ formData, onChange, onSubmit }) => {
	const categoryOptions = [
		{ value: "income", label: "Доходы" },
		{ value: "expense", label: "Расходы" },
		{ value: "transfer", label: "Переводы" },
	];

	return (
		<form data-testid="create-category-form" onSubmit={onSubmit} className="mt-4">
			<div className="mb-4">
				<label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
					Category Name:
				</label>
				<input
					type="text"
					id="title"
					name="title"
					value={formData.title}
					onChange={onChange}
					required
					className="border border-gray-300 p-2 w-full text-gray-700 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">
					Category Type:
				</label>
				<select
					id="type"
					name="type"
					value={formData.type}
					onChange={onChange}
					className="border border-gray-300 p-2 w-full text-gray-700 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
				>
					{categoryOptions.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>
			<button
				type="submit"
				className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
			>
				Create Category
			</button>
		</form>
	);
};

export default CreateCategoryForm;
