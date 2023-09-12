import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  root: './play',
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      'doggy-ui-v3': resolve(__dirname, '../packages')
    }
  }
})
