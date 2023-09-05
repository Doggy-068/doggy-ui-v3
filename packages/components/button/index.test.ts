import { test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import DuButton from './index.vue'

test('test du-button', () => {
  const wrapper = shallowMount(DuButton, {
    slots: {
      default: 'A Button'
    }
  })

  expect(wrapper.text()).toContain('A Button')
})
