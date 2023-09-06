import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import DuTag from './index.vue'

describe('test du-tag', () => {
  const wrapper = shallowMount(DuTag, {
    slots: {
      default: 'A Tag'
    },
    props: {
      closeable: true
    }
  })

  test('render default slot', () => {
    expect(wrapper.text()).toBe('A Tag')
  })

  test('emit close event', async () => {
    await wrapper.find('.icon').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  test('without closeable', async () => {
    await wrapper.setProps({ closeable: false })
    expect(wrapper.find('.icon').exists()).toBe(false)
  })
})
