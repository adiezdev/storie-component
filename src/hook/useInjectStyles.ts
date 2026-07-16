// useInjectStyles.ts
import { useEffect } from 'react';

let injected = false;

export function useInjectStyles(css: string, id: string) {
    useEffect(() => {
        if (injected || typeof document === 'undefined') return;
        if (document.getElementById(id)) { injected = true; return; }

        const style = document.createElement('style');
        style.id = id;
        style.textContent = css;
        document.head.appendChild(style);
        injected = true;
    }, []);
}