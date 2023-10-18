<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Props } from './types'

defineOptions({
  name: 'du-tooltip'
})

const props = withDefaults(defineProps<Props>(), {
  trigger: 'hover',
  position: 'top'
})

const showTooltip = ref<boolean>(false)

const reference = ref<HTMLDivElement>()

const tooltipStyle = computed(() => {
  if (props.position === 'top') {
    return { top: '-14px', transform: 'translateY(-100%)' }
  } else if (props.position === 'left') {
    return { left: '-14px', transform: 'translateX(-100%)' }
  } else if (props.position === 'bottom') {
    return { top: `calc(14px + ${reference.value?.clientHeight}px)` }
  } else if (props.position === 'right') {
    return { left: `calc(14px + ${reference.value?.clientWidth}px)` }
  }
})
</script>

<template>
  <div class="doggy-ui-v3-tooltip">
    <Transition name="doggy-ui-v3-tooltip">
      <div class="tooltip" v-show="showTooltip" :style="tooltipStyle">
        <slot name="content">{{ props.text }}</slot>
        <span class="arrow" :class="[props.position]"></span>
      </div>
    </Transition>
    <div ref="reference" @mouseenter="props.trigger === 'hover' ? (showTooltip = true) : null" @mouseleave="props.trigger === 'hover' ? (showTooltip = false) : null" @click="props.trigger === 'click' ? (showTooltip = !showTooltip) : null">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-tooltip-enter-active,
.doggy-ui-v3-tooltip-leave-active {
  transition: all 0.3s;
}

.doggy-ui-v3-tooltip-enter-to,
.doggy-ui-v3-tooltip-leave-from {
  opacity: 1;
}

.doggy-ui-v3-tooltip-enter-from,
.doggy-ui-v3-tooltip-leave-to {
  opacity: 0;
}

.doggy-ui-v3-tooltip {
  position: relative;
  overflow: visible;
  width: fit-content;

  .tooltip {
    font-size: 14px;
    position: absolute;
    z-index: 999;
    width: max-content;
    background: var(--du--v3--white);
    border: 1px solid var(--du--v3--border--color);
    border-radius: 4px;
    padding: 0 0.5em;
    min-height: 28px;
    display: flex;
    align-items: center;

    .arrow {
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 2px;
      border: 1px solid var(--du--v3--border--color);
      background: var(--du--v3--white);
      transform: rotateZ(45deg);

      &.top {
        bottom: -4px;
        left: 0.5em;
        border-top-color: transparent;
        border-left-color: transparent;
      }

      &.bottom {
        top: -4px;
        left: 0.5em;
        border-bottom-color: transparent;
        border-right-color: transparent;
      }

      &.right {
        top: 0.5em;
        left: -4px;
        border-top-color: transparent;
        border-right-color: transparent;
      }

      &.left {
        top: 0.5em;
        right: -4px;
        border-bottom-color: transparent;
        border-left-color: transparent;
      }
    }
  }
}
</style>
