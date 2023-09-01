import { defineConfig } from 'vitepress'
import { name, description } from '../../package.json'
import mdPlugin from './plugins/md-plugin'
import path from 'path'

export default defineConfig({
  srcDir: './pages',
  title: name,
  description,
  themeConfig: {
    nav: [
      { text: 'Guides', link: '/guides/installation' },
      { text: 'Components', link: '/components/button' }
    ],
    sidebar: {
      '/guides/': {
        items: [
          { text: 'Installation', link: '/guides/installation' }
        ]
      },
      '/components': {
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Link', link: '/components/link' },
          { text: 'Progress', link: '/components/progress' }
        ]
      }
    }
  },
  markdown: {
    config: md => mdPlugin(md)
  },
  vite: {
    resolve: {
      alias: {
        'doggy-ui-v3': path.resolve(__dirname, '../../packages')
      }
    }
  }
})
