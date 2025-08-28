import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 5173,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  optimizeDeps: {
    include: ['ol']
  }
});