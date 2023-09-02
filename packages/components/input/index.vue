<script setup lang="ts">
import { ref } from 'vue'
import type { Size } from '../../types'
import { IconClear } from '../../icon'

defineOptions({
  name: 'du-input'
})

const props = withDefaults(defineProps<{
  modelValue: string
  size?: Exclude<Size, 'large'>
  clearable?: boolean
}>(), {
  size: 'default',
  clearable: false
})

const emits = defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()

const inputRef = ref<HTMLInputElement>()

const handleClearClick = () => {
  emits('update:modelValue', '')
  inputRef.value?.focus()
}
</script>

<template>
  <div class="doggy-ui-v3-input" :class="[`${props.size}`]">
    <input ref="inputRef" :value="props.modelValue" @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)" />
    <icon-clear v-if="props.clearable" class="clear" @click="handleClearClick" />
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-input {
  display: flex;
  align-items: center;

  input {
    font-size: inherit;
    border: 1px solid #cccccc;
    border-radius: 4px;
    height: 100%;
    width: 100%;
    padding: 0 2em 0 0.8em;

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

  .clear {
    display: none;
    font-size: 16px;
    cursor: pointer;
    position: absolute;
    right: 1.5em;
    color: #cccccc;
  }

  &:hover {
    .clear {
      display: block;
    }
  }
}
</style>
