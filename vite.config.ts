import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
	base: "",
	plugins: [react(), viteTsconfigPaths()],
	server: {
		open: true,
		// this sets a default port to 2024
		port: 2024,
	},
});
