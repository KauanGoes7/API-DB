import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const serverConfig = {
  server: {
    hmr: {
      overlay: false
    }
  }
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ...serverConfig
})

