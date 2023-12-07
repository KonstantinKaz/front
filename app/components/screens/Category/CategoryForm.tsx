// components/CategoryForm.js

import { CategoryService } from '@/services/category.service'
import { useState } from 'react'

const CategoryForm = ({ onCategoryAdded }) => {
	const [formData, setFormData] = useState({
		title: '',
		// Другие поля, если необходимо
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevData) => ({ ...prevData, [name]: value }))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		// Ваши проверки формы, если нужны

		try {
			// Вызываем функцию создания категории
			const newCategory = await CategoryService.create(formData)

			// Обновляем состояние после успешного создания категории
			onCategoryAdded(newCategory)

			// Очищаем форму
			setFormData({
				title: '',
				// Сбрасываем другие поля, если необходимо
			})

			console.log('Категория успешно добавлена:', newCategory)
		} catch (error) {
			console.error('Ошибка при добавлении категории:', error)
			// Обработка ошибок, если необходимо
		}
	}

	return (
		<form onSubmit={handleSubmit} className="mt-4">
			<div>
				<label className="block text-gray-700 text-sm font-bold mb-2">
					Название категории:
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
			{/* Другие поля формы, если необходимо */}
			<button
				type="submit"
				className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
			>
				Создать категорию
			</button>
		</form>
	)
}

export default CategoryForm
