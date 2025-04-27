import { defineConfig } from 'vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    // base: '/ski-people/',
    // base: '/ski-people/dist/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@scss': path.resolve(__dirname, 'src/scss'),
        },
    },
});
