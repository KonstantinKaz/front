// components/layout/Header.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe("Header component", () => {
	it("renders without crashing", () => {
		render(<Header />);
		expect(screen.getByRole("banner")).toBeInTheDocument();
	});

	it("displays 'Зарегистрироваться/Войти' link when not authenticated", () => {
		render(<Header />);
		expect(screen.getByRole("link", { name: /зарегистрироваться\/войти/i })).toBeInTheDocument();
	});

	it("displays 'Профиль' link and 'Выйти' button when authenticated", () => {
		// Mocking the cookie to simulate authentication
		Object.defineProperty(window.document, "cookie", {
			writable: true,
			value: "token=mockToken",
		});

		render(<Header />);
		expect(screen.getByRole("link", { name: /профиль/i })).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /выйти/i })).toBeInTheDocument();
	});
});
