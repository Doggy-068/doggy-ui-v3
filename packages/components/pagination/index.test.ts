import { describe, test, expect } from 'vitest'
import { shallowMount, VueWrapper } from '@vue/test-utils'
import DuPagination from './index.vue'

describe('test du-pagination', () => {
  const wrapper: VueWrapper = shallowMount(DuPagination, {
    props: {
      total: 100,
      index: 1,
      'onUpdate:index': (val: number) => wrapper.setProps({ index: val })
    }
  })

  test('v-model:index work', async () => {
    await wrapper.find('.next').trigger('click')
    expect(wrapper.props('index')).toBe(2)
    await wrapper.find('.prev').trigger('click')
    expect(wrapper.props('index')).toBe(1)
  })
})
