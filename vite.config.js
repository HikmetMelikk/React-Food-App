import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
    {
      'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
      'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
    },
  )],
  
})
