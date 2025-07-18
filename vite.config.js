// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react()
    ,tailwindcss()
  ],
  server: {
    host: true,        // exposes to LAN (0.0.0.0 internally)
    port: 5173,        // optional: set custom port (default is 5173)
  },
})
