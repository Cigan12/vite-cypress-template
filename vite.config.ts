import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), eslintPlugin()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData:
                    '@import "./src/styles/Fonts.variables"; @import "./src/styles/Colors.variables";',
            },
        },
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, './src/assets'),
        },
    },
});
