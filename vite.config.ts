import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    commonjsOptions: {
      include: ['tailwind.config.js', 'node_modules/**'],
    },
  },
  optimizeDeps: {
    include: ['tailwind-config'],
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'tailwind-config': resolve(__dirname, './tailwind.config.js'),
    },
  },
})
