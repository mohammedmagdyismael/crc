import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build'
  },
  resolve: {
    alias: {
      'app': '/src/app',
      'views': '/src/views',
      'pages': '/src/pages',
    }
  },
  plugins: [react()],
})
