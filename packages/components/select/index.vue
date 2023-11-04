<script setup lang="ts">
import type { SelectProps } from './types'
import { computed, ref, useSlots } from 'vue'

defineOptions({
  name: 'du-select'
})

const props = withDefaults(defineProps<SelectProps>(), {})

defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()

const slots = useSlots()

const display = computed(() => {
  const values = slots['default']!().map(item => ({ value: item.props!['value'], label: item.props!['label'] }))
  return values.find(item => item.value === props.modelValue)?.label || ''
})

const isOptionShow = ref(false)

const handleInputClick = () => {
  isOptionShow.value = true
}

defineExpose({
  closeOption() {
    isOptionShow.value = false
  }
})
</script>

<template>
  <div class="doggy-ui-v3-select">
    <div class="input" @click="handleInputClick">
      <input :value="display" readonly />
    </div>
    <div class="option" v-show="isOptionShow">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-select {
  position: relative;
  width: fit-content;

  .input {
    height: 28px;

    input {
      box-sizing: border-box;
      height: 100%;
      outline: none;
      border: 1px solid var(--du--v3--border--color);
      cursor: pointer;
      padding: 0 0.5em;
    }
  }

  .option {
    position: absolute;
    border: 1px solid var(--du--v3--border--color);
    transform: translateY(10px);
  }
}
</style>
