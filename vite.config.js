import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import injectCss from '@cxing/vitejs-plugin-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        minify: false,
        cssCodeSplit: true,
        sourcemap: true,
        lib: {
            entry: "src/index.ts",
            name: "storie-component",
            fileName: (format) => `storie-component.${format}.js`,
        },
        rollupOptions: {
            main: "src/index.ts",
            external: ["react", "react-dom"],
            globals : {
                react: "React",
                "react-dom": "ReactDOM"
            }
        } 
        
    },
    emitCss: true,
    css: {
        inpunt: "src/index.css",            
    },
    plugins: [react(), injectCss()],  // NEW
});
