import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable JSX runtime optimization
      jsxRuntime: 'automatic',
      // Add babel plugins if needed
      babel: {
        plugins: [
          ['@babel/plugin-transform-runtime'],
        ]
      }
    }),
    // Generate gzipped bundles
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // Only compress files > 10kb
    }),
    // Bundle size analyzer (generates stats.html)
    visualizer({
      filename: 'stats.html',
      gzipSize: true,
      brotliSize: true,
    })
  ],
  
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate source maps for production
    sourcemap: false,
    // Minification options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Chunk splitting strategy
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Add more manual chunks as needed
        },
        // Customize chunk naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  
  server: {
    host: "0.0.0.0"
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@babel/runtime']
  }
})