import { h, render } from 'vue'
import DuNotification from './index.vue'
import type { Props } from './types'

type Option = Omit<Props, 'idx'>

export default (option: Option) => {
  const box = document.createElement('div')
  box.style.width = '0'
  box.style.height = '0'
  box.style.overflow = 'visible'
  const vNode = h(DuNotification, { type: option.type, title: option.title, content: option.content })
  render(vNode, box)
  document.body.appendChild(box)
}
