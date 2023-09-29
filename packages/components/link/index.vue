<script setup lang="ts">
import type { Type } from '../../types'

defineOptions({
  name: 'du-link'
})

const props = withDefaults(defineProps<{
  type?: Type
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top'
  disabled?: boolean
}>(), {
  type: 'primary',
  href: 'javascript:void(0)',
  target: '_self',
  disabled: false
})

const handleAnchorClick = (e: Event) => {
  if (props.disabled) {
    e.preventDefault()
  }
}
</script>

<template>
  <span class="doggy-ui-v3-link" :class="[`${props.type}`, props.disabled ? 'disabled' : '']">
    <a :href="props.href" :target="props.target" @click="handleAnchorClick">
      <slot></slot>
    </a>
  </span>
</template>

<style lang="scss">
.doggy-ui-v3-link {
  cursor: pointer;
  font-size: 16px;

  &:not(:first-of-type) {
    margin-left: 0.5em;
  }

  @each $type in (primary, warning, error) {
    &.#{$type} {
      color: var(--du--v3--#{$type}--color);

      &:hover {
        text-decoration: underline var(--du--v3--#{$type}--color);
      }

      a {
        color: inherit;
        text-decoration: none;

        &:hover {
          text-decoration: none;
        }
      }

      &.disabled {
        cursor: not-allowed;
        color: var(--du--v3--#{$type}--color--disable);

        a {
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
