import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://darkartyom.github.io/Hogwarts/',
  plugins: [react()],
});
