import { describe, test, expect } from 'vitest'
import { shallowMount, VueWrapper } from '@vue/test-utils'
import DuSwitch from './index.vue'
import type { Props } from './types'

describe('test du-switch', () => {
  const wrapper: VueWrapper = shallowMount(DuSwitch, {
    props: {
      modelValue: false,
      'onUpdate:modelValue': (val: Props['modelValue']) => wrapper.setProps({ modelValue: val })
    }
  })

  test('v-model work', async () => {
    await wrapper.find('.doggy-ui-v3-switch').trigger('click')
    expect(wrapper.props('modelValue')).toBe(true)
    await wrapper.find('.doggy-ui-v3-switch').trigger('click')
    expect(wrapper.props('modelValue')).toBe(false)
  })
})
