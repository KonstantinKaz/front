import { fireEvent, render, screen } from "@testing-library/react";

import { useRouter } from "next/router";
import { describe, test, vi } from "vitest";
import Profile from "./Profile";

// Мокируем useRouter из next/router
vi.mock("next/router", () => ({
	useRouter: vi.fn(),
}));

describe("Profile", () => {
	test("отображает заголовок и ссылку", () => {
		render(<Profile />);

		// Проверка наличия заголовка
		const headingElement = screen.getByText(/Profile/i);
		expect(headingElement).toBeInTheDocument();

		// Проверка наличия ссылки
		const linkElement = screen.getByRole("link", { name: /Редактировать профиль/i });
		expect(linkElement).toBeInTheDocument();
	});

	test("перенаправляет на страницу редактирования профиля при клике на ссылку", () => {
		const push = vi.fn();
		(useRouter as any).mockImplementation(() => ({ push }));

		render(<Profile />);

		// Кликаем на ссылку
		const linkElement = screen.getByRole("link", { name: /Редактировать профиль/i });
		fireEvent.click(linkElement);
	});
});
