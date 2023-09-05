/// <reference types='vitest' />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['packages/**']
    })
  ],
  test: {
    environment: 'jsdom'
  },
  build: {
    rollupOptions: {
      external: ['vue']
    },
    lib: {
      entry: 'packages/index.ts',
      formats: ['es'],
      fileName: 'index'
    }
  }
})
