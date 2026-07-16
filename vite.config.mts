import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
    build: {
        minify: false,
        cssCodeSplit: true,
        sourcemap: true,
        lib: {
            entry: "src/index.ts",
            name: "storie-component",
            fileName: (format) => `storie-component.${format}.js`,
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        }
    },
    plugins: [react(), cssInjectedByJsPlugin()],
});