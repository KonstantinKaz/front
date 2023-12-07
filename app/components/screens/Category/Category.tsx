import { useEffect, useState } from 'react'
import styles from './Category.module.scss'
import CategoryForm from './CategoryForm' // Импортируем компонент формы
import CategoryItem from './CategoryItem'

import { CategoryService } from '@/services/category.service'

const Category = () => {
	const [categories, setCategories] = useState([])
	const [isFormOpen, setIsFormOpen] = useState(false) // Локальное состояние для отслеживания открытия/закрытия формы

	const fetchData = async () => {
		try {
			const response = await CategoryService.getAllCategories()
			console.log(response)
			const results = response.results || []
			console.log(results)
			setCategories(results)
		} catch (error) {
			console.error('Error fetching Categories:', error)
			setCategories([])
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const handleFormToggle = () => {
		// Инвертируем состояние формы при нажатии на кнопку
		setIsFormOpen((prevIsFormOpen) => !prevIsFormOpen)
	}

	const handleCategoryAdded = (newCategory) => {
		// Обновляем список категорий после успешного добавления новой категории
		setCategories((prevCategories) => [newCategory, ...prevCategories])
		// Закрываем форму после успешного добавления
		setIsFormOpen(false)
	}

	return (
		<div>
			<h1 className={styles.category}>Категории</h1>
			<button onClick={handleFormToggle}>Добавить категорию</button>
			{isFormOpen && <CategoryForm onCategoryAdded={handleCategoryAdded} />}
			<div className={styles.category}>
				{categories.map((category) => (
					<CategoryItem key={category.id} category={category} />
				))}
				{categories.length === 0 && <p>Категорий нет</p>}
			</div>
		</div>
	)
}

export default Category
