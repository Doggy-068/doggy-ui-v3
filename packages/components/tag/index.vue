<script setup lang="ts">
import { IconClose } from '../../icon'
import type { Size } from '../../types'

defineOptions({
  name: 'du-tag'
})

const props = withDefaults(defineProps<{
  size?: Exclude<Size, 'large'>
  color?: string
  closeable?: boolean
}>(), {
  size: 'default',
  color: 'var(--du--v3--primary--color)',
  closeable: false
})

const emits = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <span class="doggy-ui-v3-tag" :class="[`${props.size}`]" :style="{ background: props.color }">
    <slot></slot>
    <icon-close v-if="props.closeable" class="icon" @click="emits('close')" />
  </span>
</template>

<style lang="scss">
.doggy-ui-v3-tag {
  display: inline-flex;
  align-items: center;
  padding: 0 0.5em;
  color: #ffffff;

  &:not(:first-of-type) {
    margin-left: 0.5em;
  }

  &.small {
    height: 24px;
    font-size: 12px;
    border-radius: 2px;
  }

  &.default {
    height: 28px;
    font-size: 14px;
    border-radius: 4px;
  }

  .icon {
    margin-left: 0.2em;
    cursor: pointer;
  }
}
</style>
