import { h, render } from 'vue'
import DuMessage from './index.vue'
import type { Props as Option } from './types'

export default (() => {
  const container = document.createElement('div')
  container.className = 'doggy-ui-v3-message-container'
  container.style.position = 'fixed'
  container.style.top = '0'
  container.style.zIndex = '999'
  document.body.appendChild(container)

  return (option: Option) => {
    const vNode = h(DuMessage, { type: option.type, text: option.text })
    const box = document.createElement('div')
    box.className = 'doggy-ui-v3-message-box'
    box.style.marginTop = '1em'
    box.style.marginLeft = '1em'
    container.appendChild(box)
    render(vNode, box)
    setTimeout(() => {
      container.removeChild(box)
    }, option.duration || 3000)
  }
})()
