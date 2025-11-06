import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 2069 },
  base: '/event/',  // 👈 match Tomcat subfolder
})
