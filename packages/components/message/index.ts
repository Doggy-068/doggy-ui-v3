import { h, render } from 'vue'
import DuMessage from './index.vue'
import type { Props } from './types'

type Option = Omit<Props, 'idx'> & { duration?: number }

let seed = 1

export default (option: Option) => {
  const box = document.createElement('div')
  box.style.width = '0'
  box.style.height = '0'
  box.style.overflow = 'visible'
  const vNode = h(DuMessage, { idx: seed++, type: option.type, text: option.text })
  render(vNode, box)
  document.body.appendChild(box)

  const onOtherDestroy = () => {
    vNode.component?.exposed!.updateIdx()
  }
  addEventListener('doggy-ui-v3-message-destroy', onOtherDestroy)

  setTimeout(() => {
    seed--
    removeEventListener('doggy-ui-v3-message-destroy', onOtherDestroy)
    vNode.component?.exposed!.updateRender(false)
    dispatchEvent(new Event('doggy-ui-v3-message-destroy'))
    setTimeout(() => {
      document.body.removeChild(box)
    }, 3000)
  }, option.duration || 3000)
}
