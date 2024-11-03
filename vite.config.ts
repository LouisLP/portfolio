import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/vue-portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Add source maps for debugging
    sourcemap: true,
    // Ensure assets are properly handled
    assetsDir: 'assets',
    // Configure rollup options if needed
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
