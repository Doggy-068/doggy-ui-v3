<script setup lang="ts">
import type { CheckboxProps } from './types'

defineOptions({
  name: 'du-checkbox'
})

withDefaults(defineProps<CheckboxProps>(), {})

defineEmits<{
  (e: 'update:modelValue', val: string[]): void
}>()
</script>

<template>
  <div class="doggy-ui-v3-checkbox">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-checkbox {
  display: flex;
  font-size: 16px;
}
</style>
