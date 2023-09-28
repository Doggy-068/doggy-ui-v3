import type { Directive } from 'vue'
import { h, render } from 'vue'
import { IconLoading } from '../../icon'
import './scss/index.scss'

const spinIn = (mask: HTMLElement) => {
  mask.style.display = 'flex'
  mask.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], { duration: 1000, iterations: 1 })
}

const spinOut = (mask: HTMLElement) => {
  mask.animate([
    { opacity: 1 },
    { opacity: 0 }
  ], { duration: 1000, iterations: 1 }).addEventListener('finish', () => {
    mask.style.display = 'none'
  })
}

export const vSpin: Directive<HTMLElement, boolean> = {
  mounted: (el, binding) => {
    el.style.position = 'relative'
    const mask = document.createElement('div')
    mask.className = 'doggy-ui-v3-spin-mask'
    mask.style.display = binding.value ? 'flex' : 'none'
    mask.style.justifyContent = 'center'
    mask.style.alignItems = 'center'
    mask.style.position = 'absolute'
    mask.style.top = '0'
    mask.style.right = '0'
    mask.style.bottom = '0'
    mask.style.left = '0'
    mask.style.background = 'rgba(255, 255, 255, 0.9)'
    render(h(IconLoading, { style: 'font-size: xx-large; color: var(--du--v3--primary--color)', class: 'doggy-ui-v3-spin-mask-icon' }), mask)
    el.appendChild(mask)
  },
  updated: (el, binding) => {
    const mask = el.querySelector('.doggy-ui-v3-spin-mask') as HTMLElement
    binding.value ? (spinIn(mask)) : (spinOut(mask))
  }
}
