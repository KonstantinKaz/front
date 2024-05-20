import { TransactionService } from "@/services/transaction.service";
import { render, waitFor } from "@testing-library/react";
import { expect, test, vitest } from "vitest";
import Transaction from "./Transaction";

test("fetches and renders transactions correctly", async () => {
	// Mock transaction data
	const mockTransactions = [
		{
			id: "1",
			description: "Transaction 1",
			amount: 100,
			transaction_type: "Доход",
			income_category: { id: "1", title: "Income Category 1" },
			date: "2024-05-20",
		},
		{
			id: "2",
			description: "Transaction 2",
			amount: 50,
			transaction_type: "Расход",
			expense_category: { id: "1", title: "Expense Category 1" },
			date: "2024-05-21",
		},
	];

	// Mock getAll function of TransactionService
	const mockGetAll = vitest.spyOn(TransactionService, "getAll").mockResolvedValueOnce({ results: mockTransactions });

	// Render Transaction component
	const { getByText } = render(<Transaction />);

	// Wait for transactions to be fetched and rendered
	await waitFor(() => {
		// Check if transaction data is rendered correctly
		expect(getByText("Transaction ID: 1")).toBeInTheDocument();
		expect(getByText("Description: Transaction 1")).toBeInTheDocument();
		expect(getByText("Amount: 100")).toBeInTheDocument();
		expect(getByText("Transaction Type: Доход")).toBeInTheDocument();
		expect(getByText("Income Category: Income Category 1")).toBeInTheDocument();
		expect(getByText("Date: 2024-05-20")).toBeInTheDocument();

		expect(getByText("Transaction ID: 2")).toBeInTheDocument();
		expect(getByText("Description: Transaction 2")).toBeInTheDocument();
		expect(getByText("Amount: 50")).toBeInTheDocument();
		expect(getByText("Transaction Type: Расход")).toBeInTheDocument();
		expect(getByText("Expense Category: Expense Category 1")).toBeInTheDocument();
		expect(getByText("Date: 2024-05-21")).toBeInTheDocument();
	});

	// Restore the original implementation of TransactionService.getAll
	mockGetAll.mockRestore();
});
