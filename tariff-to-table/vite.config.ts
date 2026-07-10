import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed under https://arhaan-ahuja.github.io/tariff-to-table/
// https://vite.dev/config/
export default defineConfig({
  base: '/tariff-to-table/',
  plugins: [react()],
})
