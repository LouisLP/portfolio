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
  // This puts the assets in the root of the dist folder
  // build: {
  //   outDir: 'dist',
  //   assetsDir: '', // Assets will be placed in the /dist/ folder
  // },
})
