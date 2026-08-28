import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' so the built app works from any mount path (file://, Workers assets, subpath).
export default defineConfig({
  base: './',
  plugins: [react()],
})
