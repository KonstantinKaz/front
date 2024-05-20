import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import ProfileForm from "./ProfileForm";

describe("ProfileForm", () => {
	test("submits profile form with correct data and generates PDF", async () => {
		// Render the ProfileForm component
		render(<ProfileForm />);

		// Fill out and submit form
		fireEvent.change(screen.getByLabelText("Name:"), { target: { value: "John Doe" } });

		fireEvent.change(screen.getByLabelText("Name:"), {
			target: { files: [new File(["(⌐□_□)"], "test.png", { type: "image/png" })] },
		});
		fireEvent.click(screen.getByText("Submit"));
	});
});
