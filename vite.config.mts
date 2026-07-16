import react from "@vitejs/plugin-react";
import { defineConfig, esmExternalRequirePlugin } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
    plugins: [
        esmExternalRequirePlugin({
            external: ["react", "react-dom", "react/jsx-runtime"],
        }),
        react(),
        cssInjectedByJsPlugin(),
    ],
    build: {
        minify: false,
        cssCodeSplit: true,
        sourcemap: true,
        lib: {
            entry: "src/index.ts",
            name: "storie-component",
            fileName: (format) => format === 'umd' ? 'storie-component.umd.cjs' : `storie-component.${format}.js`,
            formats: ['es', 'umd'],
        },
        rolldownOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        }
    },
});