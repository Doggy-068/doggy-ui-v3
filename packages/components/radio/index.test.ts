import { describe, test, expect } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import DuRadio from './index.vue'
import DuRadioOption from './components/option/index.vue'
import { h } from 'vue'
import type { RadioProps } from './types'

describe('test du-radio and du-radio-option', () => {
  const wrapper: VueWrapper = mount(DuRadio, {
    props: {
      modelValue: '',
      'onUpdate:modelValue': (val: RadioProps['modelValue']) => wrapper.setProps({ modelValue: val })
    },
    slots: {
      default: [
        h(DuRadioOption, { value: 'option 1' }),
        h(DuRadioOption, { value: 'option 2' })
      ]
    }
  })

  test('v-model work', async () => {
    await wrapper.findAll('.doggy-ui-v3-radio-option')[1].trigger('click')
    expect(wrapper.props('modelValue')).toBe('option 2')
    await wrapper.find('.doggy-ui-v3-radio-option').trigger('click')
    expect(wrapper.props('modelValue')).toBe('option 1')
  })
})
