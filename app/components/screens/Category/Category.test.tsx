import { fireEvent, render, screen } from "@testing-library/react";
import Category from "./Category";

describe("Category Component", () => {
	it('should toggle the form when the "Add Category" button is clicked', () => {
		render(<Category />);

		// Проверяем, что форма для создания категории не отображается изначально
		expect(screen.queryByTestId("create-category-form")).not.toBeInTheDocument();

		// Нажимаем на кнопку "Добавить категорию"
		fireEvent.click(screen.getByRole("button", { name: /Добавить категорию/i }));

		// Проверяем, что форма для создания категории отображается после клика
		expect(screen.getByTestId("create-category-form")).toBeInTheDocument();

		// Нажимаем еще раз на кнопку "Добавить категорию"
		fireEvent.click(screen.getByRole("button", { name: /Добавить категорию/i }));

		// Проверяем, что форма для создания категории скрылась после второго клика
		expect(screen.queryByTestId("create-category-form")).not.toBeInTheDocument();
	});
});
