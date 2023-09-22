import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import DuBadge from './index.vue'

describe('test du-badge', () => {
  const wrapper = shallowMount(DuBadge, {
    props: {
      value: 1000,
      numeric: true
    },
    slots: {
      default: '<div style="font-size: 32px">Hello World</div>'
    }
  })

  test('when value is greater than max', () => {
    expect(wrapper.find('.badge').text()).toBe(`${wrapper.props('max')}+`)
  })
})
