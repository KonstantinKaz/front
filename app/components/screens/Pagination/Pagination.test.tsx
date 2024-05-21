import { render, screen, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import PhotoGallery from "./PhotoGallery";

// Mock IntersectionObserver
class MockIntersectionObserver {
	constructor() {}
	observe() {}
	disconnect() {}
	unobserve() {} // Add unobserve function
}

// Assign the mock to window
window.IntersectionObserver = MockIntersectionObserver;

test('renders "Loading..." message initially', async () => {
	render(<PhotoGallery initialPhotos={[]} />);

	// Wait for the loading message to appear
	await waitFor(() => {
		expect(screen.getByText("Loading...")).toBeInTheDocument();
	});
});
