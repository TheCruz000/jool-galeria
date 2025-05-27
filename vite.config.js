import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; 

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/jool-galeria/' : '/', // Base condicional
  server: {
    host: '0.0.0.0',
    port: 3000,
    // Opcional: Forzar que en desarrollo todas las rutas caigan en index.html
    // (útil si usas React Router u otro enrutamiento cliente)
    proxy: {
      '/jool-galeria': '/', // Redirige /jool-galeria a / en dev
    },
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
}));