import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        // Postprocessing MUST stay inside three-vendor — splitting causes a
        // circular chunk + TDZ runtime error ("Cannot access X before init").
        manualChunks: (id: string) => {
          if (
            id.includes('three') ||
            id.includes('@react-three') ||
            id.includes('postprocessing')
          ) return 'three-vendor'
          if (id.includes('framer-motion') || id.includes('gsap') || id.includes('@gsap')) return 'motion-vendor'
          if (id.includes('lenis')) return 'lenis-vendor'
        },
      },
    },
  },
})
