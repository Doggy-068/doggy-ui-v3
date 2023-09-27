import { describe, test, expect } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import DuCheckbox from './index.vue'
import DuCheckboxOption from './components/option/index.vue'
import { h } from 'vue'
import type { CheckboxProps } from './types'

describe('test du-checkbox and du-checkbox-option', () => {
  const wrapper: VueWrapper = mount(DuCheckbox, {
    props: {
      modelValue: [],
      'onUpdate:modelValue': (val: CheckboxProps['modelValue']) => wrapper.setProps({ modelValue: val })
    },
    slots: {
      default: h(DuCheckboxOption, { value: 'option 1' })
    }
  })

  test('v-model work', async () => {
    await wrapper.find('.doggy-ui-v3-checkbox-option').trigger('click')
    expect(wrapper.props('modelValue')).toStrictEqual(['option 1'])
  })

  test('option is checked', () => {
    expect(wrapper.find('.doggy-ui-v3-checkbox-option').classes()).toContain('checked')
  })
})
