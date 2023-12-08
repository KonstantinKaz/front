import { CategoryService } from '@/services/category.service'
import { ICategory } from '@/shared/transaction.types'
import { ChangeEvent, FC, FormEvent, useState } from 'react'

interface CreateCategoryProps {
	onCategoryAdded: (category: ICategory) => void
}

const CreateCategory: FC<CreateCategoryProps> = ({ onCategoryAdded }) => {
	const [formData, setFormData] = useState({
		title: '',
		type: 'income' as 'income' | 'expense' | 'transfer',
	})

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setFormData((prevData) => ({ ...prevData, [name]: value }))
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			const newCategory = await CategoryService.create(formData)
			console.log('New Category:', newCategory)

			onCategoryAdded(newCategory)
			setFormData({
				title: '',
				type: 'income',
			})

			console.log('Category successfully added:', newCategory)
		} catch (error) {
			console.error('Error while adding category:', error)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="mt-4">
			<div>
				<label className="block text-gray-700 text-sm font-bold mb-2">
					Category Name:
				</label>
				<input
					type="text"
					name="title"
					value={formData.title}
					onChange={handleChange}
					required
					className="border border-gray-300 p-2 w-full text-gray-700 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
				/>
			</div>
			<div className="mt-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">
					Category Type:
				</label>
				<select
					name="type"
					value={formData.type}
					onChange={handleChange}
					className="border border-gray-300 p-2 w-full text-gray-700 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
				>
					<option value="income">Доходы</option>
					<option value="expense">Расходы</option>
					<option value="transfer">Переводы</option>
				</select>
			</div>
			<button
				type="submit"
				className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
			>
				Create Category
			</button>
		</form>
	)
}

export default CreateCategory
