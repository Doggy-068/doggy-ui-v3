/// <reference types='vite/client' />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  export default component as DefineComponent
}

declare module 'doggy-ui-v3'
