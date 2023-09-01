<script setup lang="ts">
import { Size } from '../../types'

defineOptions({
  name: 'du-input'
})

const props = withDefaults(defineProps<{
  modelValue: string
  size?: Exclude<Size, 'large'>
}>(), {
  size: 'default'
})

const emits = defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()
</script>

<template>
  <div class="doggy-ui-v3-input" :class="[`${props.size}`]">
    <input :value="props.modelValue" @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)" />
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-input {

  input {
    font-size: inherit;
    border: 1px solid #cccccc;
    border-radius: 4px;
    height: 100%;
    width: 100%;
    padding: 0 0.8em;

    &:focus {
      border-color: var(--du--v3--primary--color);
    }
  }

  &.small {
    height: 26px;
    font-size: 12px;
  }

  &.default {
    height: 32px;
    font-size: 14px;
  }
}
</style>
