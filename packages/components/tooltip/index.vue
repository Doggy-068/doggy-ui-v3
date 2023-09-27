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

const showTooltip = ref(false)

const content = ref<HTMLDivElement>()

const tooltipStyle = computed(() => {
  if (props.position === 'top') {
    return { top: '-1em', transform: 'translateY(-100%)' }
  } else if (props.position === 'left') {
    return { left: '-1em', transform: 'translateX(-100%)' }
  } else if (props.position === 'bottom') {
    return { top: `calc(1em + ${content.value?.clientHeight}px)` }
  } else if (props.position === 'right') {
    return { left: `calc(1em + ${content.value?.clientWidth}px)` }
  }
})
</script>

<template>
  <div class="doggy-ui-v3-tooltip">
    <Transition name="doggy-ui-v3-tooltip">
      <div class="tooltip" v-show="showTooltip" :style="tooltipStyle">
        <slot name="tooltip">{{ props.text }}</slot>
      </div>
    </Transition>
    <div class="content" ref="content" @mouseenter="props.trigger === 'hover' ? (showTooltip = true) : null" @mouseleave="props.trigger === 'hover' ? (showTooltip = false) : null" @click="props.trigger === 'click' ? (showTooltip = !showTooltip) : null">
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
    width: max-content;
    background: var(--du--v3--white);
    border: 1px solid var(--du--v3--border--color);
    border-radius: 4px;
    padding: 0.5em;
  }
}
</style>
