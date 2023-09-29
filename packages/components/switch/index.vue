<script setup lang="ts">
import type { Size } from '../../types'

defineOptions({
  name: 'du-switch'
})

const props = withDefaults(defineProps<{
  modelValue: boolean
  size?: Exclude<Size, 'large'>
}>(), {
  size: 'default'
})

const emits = defineEmits<{
  (e: 'update:modelValue', val: typeof props.modelValue): void
}>()
</script>

<template>
  <div class="doggy-ui-v3-switch" :class="[props.size, props.modelValue ? 'active' : '']" @click="emits('update:modelValue', !props.modelValue)">
    <div class="circle"></div>
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-switch {
  cursor: pointer;
  background: var(--du--v3--grey--background);
  box-sizing: border-box;
  transition: all 0.3s;

  &.active {
    background: var(--du--v3--primary--color);
  }

  .circle {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    background: var(--du--v3--white);
  }

  &.default {
    width: 46px;
    height: 24px;
    border-radius: 12px;

    .circle {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      top: 2px;
      left: 2px;
    }

    &.active {
      .circle {
        left: 24px;
      }
    }
  }


  &.small {
    width: 38px;
    height: 20px;
    border-radius: 10px;

    .circle {
      width: 16px;
      height: 16px;
      border-radius: 8px;
      top: 2px;
      left: 2px;
    }

    &.active {
      .circle {
        left: 20px;
      }
    }
  }
}
</style>
