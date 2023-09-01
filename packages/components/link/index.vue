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
  font-size: 16px;

  &:not(:first-of-type) {
    margin-left: 0.5em;
  }

  @each $type in $types {
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
    }
  }
}
</style>
