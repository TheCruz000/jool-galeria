import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; 

export default defineConfig({
  plugins: [react()],
  base: '/jool-galeria/',
  server: {
    host: '0.0.0.0' // Mantén esto para desarrollo
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Opcional (se sobreescribe por rollupOptions)
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        entryFileNames: 'assets/main-[hash].js', // Nombre controlado
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})