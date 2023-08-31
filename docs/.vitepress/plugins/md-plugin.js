import markdownItContainer from 'markdown-it-container'
import fs from 'fs'
import path from 'path'

export default md => {
  md.use(markdownItContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const sourceFileToken = tokens[idx + 2]
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        const source = (() => {
          if (sourceFileToken.type === 'inline') {
            return fs.readFileSync(path.resolve(__dirname, '../../../examples', `${sourceFile}.vue`), 'utf-8')
          }
        })()
        if (!source) throw new Error(`Invalid: ${sourceFile}`)
        return `<VpDemo path="../../../examples/${sourceFile}.vue" code="${encodeURIComponent(source)}">`
      }
      return '</VpDemo>'
    }
  })
}
