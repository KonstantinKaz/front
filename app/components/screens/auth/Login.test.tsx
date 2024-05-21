// Login.test.tsx
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Login from "./Login";

describe("Login", () => {
	test("пользователь успешно входит", async () => {
		// Рендерим компонент Login
		render(<Login />);

		// Заполняем форму входа
		fireEvent.change(screen.getByLabelText("Username:"), { target: { value: "testuser" } });
		fireEvent.change(screen.getByLabelText("Password:"), { target: { value: "testpassword" } });

		// Нажимаем кнопку входа
		fireEvent.click(screen.getByText("Log in"));

		// Ждем завершения входа
		await waitFor(() => {
			// Проверяем, что кнопка "Log out" появилась и содержит атрибут data-loggedin
			expect(screen.getByText("Log out"));
		});

		// Проверяем, что кнопка выхода появилась
		expect(screen.getByText("Log out")).toBeInTheDocument();
	});

	test("пользователь успешно выходит", async () => {
		// Рендерим компонент Login
		render(<Login />);

		// Заполняем форму входа
		fireEvent.change(screen.getByLabelText("Username:"), { target: { value: "testuser" } });
		fireEvent.change(screen.getByLabelText("Password:"), { target: { value: "testpassword" } });

		// Нажимаем кнопку входа
		fireEvent.click(screen.getByText("Log in"));

		// Ждем завершения входа
		await waitFor(() => {
			// Проверяем, что кнопка "Log out" появилась и содержит атрибут data-loggedin
			expect(screen.getByText("Log out"));
		});

		// Нажимаем кнопку выхода
		fireEvent.click(screen.getByText("Log out"));

		// Ждем завершения выхода
		await waitFor(() => {
			// Проверяем, что кнопка "Log out" исчезла и больше не содержит атрибута data-loggedin
			expect(screen.queryByText("Log out")).not.toHaveAttribute("data-loggedin");
		});

		// Проверяем, что форма входа снова видима
		expect(screen.getByText("Log in")).toBeInTheDocument();
	});
});
