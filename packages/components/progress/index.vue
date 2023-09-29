<script setup lang="ts">
import type { Type } from '../../types'
import { computed } from 'vue'

defineOptions({
  name: 'du-progress'
})

const props = withDefaults(defineProps<{
  type?: Type
  progress?: number
  indicator?: boolean
  indicatorFormatter?(progress: number): string
  color?: { color: string, percentage: number }[]
  animation?: boolean
}>(), {
  type: 'primary',
  progress: 0,
  indicator: false,
  animation: false
})

const colorOrdered = computed(() => props.color?.sort((a, b) => b.percentage - a.percentage) || [])
const barColor = computed(() => {
  for (const { color, percentage } of colorOrdered.value) {
    if (props.progress >= percentage) {
      return color
    }
  }
})
</script>

<template>
  <div class="doggy-ui-v3-progress" :class="[`${props.type}`]">
    <div class="orbit">
      <div class="bar" :class="[props.animation ? 'animation' : '']" :style="{ width: `${props.progress}%`, background: barColor }"></div>
    </div>
    <span v-if="props.indicator && props.indicatorFormatter" class="indicator">{{ props.indicatorFormatter && props.indicatorFormatter(props.progress) }}</span>
  </div>
</template>

<style lang="scss">
@keyframes doggy-ui-v3-progress-animation {
  from {
    position: relative;
    left: 0;
    transform: translateX(-100%);
  }

  to {
    position: relative;
    left: 100%;
    transform: translateX(0);
  }
}

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

  @each $type in (primary, warning, error) {
    &.#{$type} {
      .bar {
        border-radius: 8px;
        height: 100%;
        background: var(--du--v3--#{$type}--color);
      }
    }
  }

  .bar.animation {
    animation: doggy-ui-v3-progress-animation 2s infinite linear;
  }

  .indicator {
    text-align: right;
    width: 3.5em;
    font-size: 12px;
    flex-shrink: 0;
  }
}
</style>
