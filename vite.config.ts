import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
            external: ["react", "react-dom"],
            globals : {
                react: "React",
            }
        } 
        
    },
    plugins: [react()],    
});
