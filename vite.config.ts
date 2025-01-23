import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        minify: false,
        cssCodeSplit: true,
        sourcemap: true,
        lib: {
            entry: "src",
            name: "storie-component",
            fileName: (format) => `storie-component.${format}.js`,
            formats: ['es'],
        },
        rollupOptions: {
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        } 
        
    },
    plugins: [react(), libInjectCss()],    
});
