import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import DuLink from './index.vue'

describe('test du-link', () => {
  const wrapper = shallowMount(DuLink, {
    slots: {
      default: 'A Link'
    }
  })

  test('render default slot', () => {
    expect(wrapper.find('a').text()).toBe('A Link')
  })
})
