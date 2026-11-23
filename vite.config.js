import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Enables relative asset paths so it works on VS Code "Go Live" (Live Server) and static hosts
  server: {
    port: 5173,
    host: true
  }
});
