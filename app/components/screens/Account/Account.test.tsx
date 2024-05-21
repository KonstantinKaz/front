import { fireEvent, render, screen } from "@testing-library/react";
import Account from "./Account";

test("renders Account component", async () => {
	// Render the component
	render(<Account />);

	// Check if "Счета" header is rendered
	expect(screen.getByText("Счета")).toBeInTheDocument();

	// Check if "Добавить счет" button is rendered
	expect(screen.getByRole("button", { name: /Добавить счет/i })).toBeInTheDocument();

	// Check if initially there are no accounts
	expect(screen.getByText("Счетов нет")).toBeInTheDocument();
});

test("toggles account creation form", async () => {
	// Render the component
	render(<Account />);

	// Check if form is initially closed
	expect(screen.queryByRole("textbox")).not.toBeInTheDocument();

	// Click on "Добавить счет" button
	fireEvent.click(screen.getByRole("button", { name: /Добавить счет/i }));

	// Check if form is opened
	expect(screen.getByRole("textbox")).toBeInTheDocument();

	// Click on "Добавить счет" button again
	fireEvent.click(screen.getByRole("button", { name: /Добавить счет/i }));

	// Check if form is closed again
	expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
});

// You can write more tests to cover other functionalities of the component
