/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const url = "http://localhost:8080"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: url,
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
