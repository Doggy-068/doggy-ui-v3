<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { IconClear } from '../../icon'
import type { Props } from './types'

defineOptions({
  name: 'du-input'
})

const props = withDefaults(defineProps<Props>(), {
  modelModifiers: {},
  size: 'default',
  clearable: false
})

const emits = defineEmits<{
  (e: 'update:modelValue', val: typeof props.modelValue): void
}>()

const inputRef = ref<HTMLInputElement>()

const onInput = () => {
  const value = (() => {
    const text = inputRef.value!.value
    if (props.modelModifiers.trim) {
      return text.trim()
    } else if (props.modelModifiers.number) {
      return parseFloat(text) || 0
    } else if (props.modelModifiers.capitalize) {
      return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase()
    } else {
      return text
    }
  })()
  emits('update:modelValue', value)
  nextTick(() => {
    inputRef.value!.value = props.modelValue.toString()
  })
}

const handleClearClick = () => {
  emits('update:modelValue', '')
  inputRef.value?.focus()
}
</script>

<template>
  <div class="doggy-ui-v3-input" :class="[`${props.size}`]">
    <input ref="inputRef" :value="props.modelValue" @input="onInput" />
    <icon-clear v-if="props.clearable" class="clear" @click="handleClearClick" />
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-input {
  display: flex;
  align-items: center;

  input {
    box-sizing: border-box;
    font-size: inherit;
    border: 1px solid #cccccc;
    border-radius: 4px;
    height: 100%;
    width: 100%;
    padding: 0 2em 0 0.8em;

    &:focus {
      border-color: var(--du--v3--primary--color);
      outline: none;
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
