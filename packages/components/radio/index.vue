<script setup lang="ts">
import type { RadioProps } from './types'

defineOptions({
  name: 'du-radio'
})

withDefaults(defineProps<RadioProps>(), {})

defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()
</script>

<template>
  <div class="doggy-ui-v3-radio">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-radio {
  display: flex;
  font-size: 16px;
}
</style>
