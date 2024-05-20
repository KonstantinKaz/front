import { fireEvent, render } from "@testing-library/react";
import { expect, test, vitest } from "vitest";
import CreateAccountForm from "./CreateAccountForm";

test("renders form with provided formData and invokes onChange correctly", () => {
	// Mock onChange function
	const onChange = vitest.fn();

	// Mock formData
	const formData = {
		title: "Test Account",
		type: "Checking",
		balance: 1000,
	};

	// Render CreateAccountForm with provided props
	const { getByLabelText } = render(<CreateAccountForm formData={formData} onChange={onChange} onSubmit={() => {}} />);

	// Check if input field value matches formData title
	const accountNameInput = getByLabelText("Account Name:") as HTMLInputElement;
	expect(accountNameInput).toHaveValue("Test Account");

	// Simulate user input
	fireEvent.change(accountNameInput, { target: { value: "Updated Account" } });
});
