<script setup lang="ts">
import type { Type } from '../../types'

defineOptions({
  name: 'du-link'
})

const props = withDefaults(defineProps<{
  type?: Type
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top'
}>(), {
  type: 'primary',
  href: 'javascript:void(0)',
  target: '_self'
})
</script>

<template>
  <span class="doggy-ui-v3-link" :class="[`${props.type}`]">
    <a :href="props.href" :target="props.target">
      <slot></slot>
    </a>
  </span>
</template>

<style lang="scss">
@import '../../scss/variable.scss';

.doggy-ui-v3-link {
  cursor: pointer;

  &:not(:first-of-type) {
    margin-left: 0.5em;
  }

  @each $type in $types {
    &.#{$type} {
      a {
        color: var(--du--v3--#{$type}--color);
      }
    }
  }
}
</style>
