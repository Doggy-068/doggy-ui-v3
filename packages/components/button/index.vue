<script setup lang="ts">
import type { Type, Size } from '../../types'

defineOptions({
  name: 'du-button'
})

const props = withDefaults(defineProps<{
  type?: Type,
  size?: Exclude<Size, 'large'>
  disabled?: boolean
}>(), {
  type: 'primary',
  size: 'default',
  disabled: false
})

const emits = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button class="doggy-ui-v3-button" :class="[`${props.type}`, `${props.size}`]" @click="emits('click')" :disabled="props.disabled">
    <slot></slot>
  </button>
</template>

<style lang="scss">
@import '../../scss/variable.scss';

.doggy-ui-v3-button {
  color: var(--du--v3--white);
  padding: 0 0.5em;

  &:not(:first-of-type) {
    margin-left: 0.5em;
  }

  @each $type in $types {
    &.#{$type} {
      background: var(--du--v3--#{$type}--color);

      &:hover {
        background: var(--du--v3--#{$type}--color--opacity);
      }

      &:disabled {
        background: var(--du--v3--#{$type}--color--disable);
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.small {
    height: 28px;
    line-height: 28px;
    font-size: 14px;
  }

  &.default {
    height: 32px;
    line-height: 32px;
    font-size: 16px;
  }
}
</style>
