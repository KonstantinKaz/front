import { render, screen } from "@testing-library/react";
import AccountItem from "./AccountItem";

// Mock data
const mockAccount = {
	id: 1,
	title: "Savings Account",
	balance: 1000,
};

test("renders AccountItem component with account data", () => {
	// Render the component with mock account data
	render(<AccountItem account={mockAccount} />);

	// Check if Account ID is rendered
	expect(screen.getByText(`Account ID: ${mockAccount.id}`)).toBeInTheDocument();

	// Check if Title is rendered
	expect(screen.getByText(`Title: ${mockAccount.title}`)).toBeInTheDocument();

	// Check if Balance is rendered
	expect(screen.getByText(`Balance: ${mockAccount.balance}`)).toBeInTheDocument();
});

test("renders AccountItem component without title and balance", () => {
	// Render the component with mock account data having no title and balance
	const accountWithoutTitleAndBalance = { id: 2 };
	render(<AccountItem account={accountWithoutTitleAndBalance} />);

	// Check if Account ID is rendered
	expect(screen.getByText(`Account ID: ${accountWithoutTitleAndBalance.id}`)).toBeInTheDocument();

	// Check if Title is not rendered
	expect(screen.queryByText("Title:")).toBeNull();

	// Check if Balance is not rendered
	expect(screen.queryByText("Balance:")).toBeNull();
});
