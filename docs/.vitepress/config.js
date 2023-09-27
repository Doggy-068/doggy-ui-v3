import { defineConfig } from 'vitepress'
import { name, description, version } from '../../package.json'
import mdPlugin from './plugins/md-plugin'
import path from 'path'
import fs from 'fs'

export default defineConfig({
  base: '/doggy-ui-v3/',
  srcDir: './pages',
  title: name,
  description,
  themeConfig: {
    nav: [
      { text: 'Guides', link: '/guides/installation' },
      { text: 'Components', link: '/components/badge' },
      { text: version, link: 'https://www.npmjs.com/package/doggy-ui-v3?activeTab=versions' }
    ],
    sidebar: {
      '/guides/': {
        items: [
          { text: 'Installation', link: '/guides/installation' }
        ]
      },
      '/components': {
        items: (() => {
          const files = fs.readdirSync(path.resolve(__dirname, '../pages/components'))
          return files.map(file => {
            const component = file.slice(0, -3)
            return {
              text: `${component[0].toUpperCase()}${component.slice(1)}`,
              link: `/components/${component}`
            }
          })
        })()
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
