import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import DuButton from './index.vue'

describe('test du-button', () => {
  const wrapper = shallowMount(DuButton, {
    slots: {
      default: 'A Button'
    }
  })

  test('render default slot', () => {
    expect(wrapper.text()).toBe('A Button')
  })

  test('emit click event', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
