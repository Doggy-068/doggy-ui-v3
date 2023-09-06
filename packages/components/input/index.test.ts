import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import DuInput from './index.vue'

describe('test du-input', () => {
  const wrapper = shallowMount(DuInput, {
    props: {
      modelValue: '',
      'onUpdate:modelValue': (val: string) => wrapper.setProps({ modelValue: val }),
      clearable: true
    }
  })

  test('v-model work', async () => {
    await wrapper.find('input').setValue('test')
    expect(wrapper.props('modelValue')).toBe('test')
  })

  test('clear value', async () => {
    await wrapper.find('input').setValue('some text')
    await wrapper.find('.clear').trigger('click')
    expect(wrapper.props('modelValue')).toBe('')
  })

  test('without clearable', async () => {
    await wrapper.setProps({ clearable: false })
    expect(wrapper.find('.clear').exists()).toBe(false)
  })
})
