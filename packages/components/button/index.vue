<script setup lang="ts">
import type { Type, Size } from '../../types'

defineOptions({
  name: 'du-button'
})

const props = withDefaults(defineProps<{
  type?: Type,
  size?: Exclude<Size, 'large'>
  round?: boolean
  disabled?: boolean
}>(), {
  type: 'primary',
  size: 'default',
  round: false,
  disabled: false
})

const emits = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button class="doggy-ui-v3-button" :class="[`${props.type}`, `${props.size}`, props.round ? 'round' : '']" @click="emits('click')" :disabled="props.disabled">
    <slot></slot>
  </button>
</template>

<style lang="scss">
@import '../../scss/variable.scss';

.doggy-ui-v3-button {
  cursor: pointer;
  border: none;
  color: var(--du--v3--white);
  padding: 0 1em;
  border-radius: 2px;

  &:not(:first-of-type) {
    margin-left: 0.5em;
  }

  @each $type in $types {
    &.#{$type} {
      background: var(--du--v3--#{$type}--color);

      &:hover {
        background: var(--du--v3--#{$type}--color--opacity);
      }

      &:active {
        background: var(--du--v3--#{$type}--color--deep);
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

    &.round {
      border-radius: 14px;
    }
  }

  &.default {
    height: 32px;
    line-height: 32px;
    font-size: 16px;

    &.round {
      border-radius: 16px;
    }
  }
}
</style>
