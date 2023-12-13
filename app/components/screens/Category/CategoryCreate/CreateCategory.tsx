import { CategoryService } from '@/services/category.service'
import { CategoryModel, ICategory } from '@/shared/transaction.types'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import CreateCategoryForm from './CreateCategoryForm'

interface CreateCategoryProps {
	onCategoryAdded: (category: ICategory) => void
}

const CreateCategory: FC<CreateCategoryProps> = ({ onCategoryAdded }) => {
	const initialCategoryState: ICategory = CategoryModel as ICategory
	const [formData, setFormData] = useState<ICategory>(initialCategoryState)

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
			onCategoryAdded(newCategory)
			setFormData(initialCategoryState) // Reset to initial state
			console.log('Category successfully added:', newCategory)
		} catch (error) {
			console.error('Error while adding category:', error)
		}
	}

	return (
		<CreateCategoryForm
			formData={formData}
			onChange={handleChange}
			onSubmit={handleSubmit}
		/>
	)
}

export default CreateCategory
