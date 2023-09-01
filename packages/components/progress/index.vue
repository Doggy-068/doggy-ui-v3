<script setup lang="ts">
import type { Type } from '../../types'

defineOptions({
  name: 'du-progress'
})

const props = withDefaults(defineProps<{
  type?: Type
  progress?: number
  indicator?: boolean
  indicatorFormatter?(progress: number): string
}>(), {
  type: 'primary',
  progress: 0,
  indicator: false,
  indicatorFormatter: (progress: number) => `${progress}%`
})
</script>

<template>
  <div class="doggy-ui-v3-progress" :class="[`${props.type}`]">
    <div class="orbit">
      <div class="bar" :style="{ width: `${props.progress}%` }"></div>
    </div>
    <span v-if="props.indicator" class="indicator">{{ props.indicatorFormatter(props.progress) }}</span>
  </div>
</template>

<style lang="scss">
@import '../../scss/variable.scss';

.doggy-ui-v3-progress {
  display: flex;
  align-items: center;
  height: 8px;

  .orbit {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    background: #eeeeee;
    overflow: hidden;
  }

  @each $type in $types {
    &.#{$type} {
      .bar {
        border-radius: 8px;
        height: 100%;
        background: var(--du--v3--#{$type}--color);
      }
    }
  }

  .indicator {
    text-align: right;
    width: 3.5em;
    font-size: 12px;
    flex-shrink: 0;
  }
}
</style>
