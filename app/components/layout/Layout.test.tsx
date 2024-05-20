import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Layout from "./Layout";

describe("Layout component", () => {
	it("renders children components", () => {
		render(
			<Layout>
				<div>Child Component</div>
			</Layout>,
		);
		const childComponent = screen.getByText(/Child Component/i);
		expect(childComponent).toBeInTheDocument();
	});

	it("renders Header component", () => {
		render(
			<Layout>
				<div>Child Component</div>
			</Layout>,
		);
		const headerComponent = screen.getByRole("banner");
		expect(headerComponent).toBeInTheDocument();
	});

	it("renders SideBar component", () => {
		render(
			<Layout>
				<div>Child Component</div>
			</Layout>,
		);
		const sideBarComponent = screen.getByRole("complementary");
		expect(sideBarComponent).toBeInTheDocument();
	});
});
