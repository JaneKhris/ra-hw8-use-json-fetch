import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ra-hw8-use-json-fetch',
  plugins: [react()],
})
