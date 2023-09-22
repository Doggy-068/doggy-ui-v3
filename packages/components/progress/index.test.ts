import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import DuProgress from './index.vue'

describe('test du-progress', () => {
  const wrapper = shallowMount(DuProgress, {
    props: {
      indicator: true,
      indicatorFormatter: (progress: number) => `${progress}%`
    }
  })

  test('indicator work', () => {
    expect(wrapper.find('.indicator').text()).toBe(`${wrapper.props('progress')}%`)
  })
})
