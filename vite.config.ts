import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "tests/setup.tsx",
		css: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./app"),
		},
	},
});
