import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages for a project site, set base to the repo name
  // so asset URLs become: /personal-webpage/assets/...
  base: '/personal-webpage',
  plugins: [react()],
})
