<script setup lang="ts">
import type { Props } from './types'
import { IconError, IconInfo, IconSuccess } from '../../icon'
import { computed, ref } from 'vue'

defineOptions({
  name: 'du-message'
})

const props = withDefaults(defineProps<Props>(), {
  type: 'info'
})

const idx = ref(props.idx)

const render = ref(true)

defineExpose({
  updateIdx() {
    idx.value -= 1
  },
  updateRender(val: boolean) {
    render.value = val
  }
})

const icon = computed(() => {
  if (props.type === 'success') {
    return IconSuccess
  } else if (props.type === 'error') {
    return IconError
  } else {
    return IconInfo
  }
})
</script>

<template>
  <Transition name="doggy-ui-v3-message">
    <div v-if="render" class="doggy-ui-v3-message" :class="[`${props.type}`]" :style="{ top: `${idx * 3 - 2}em` }">
      <component :is="icon" class="icon" />
      <span class="text">{{ props.text }}</span>
    </div>
  </Transition>
</template>

<style lang="scss">
.doggy-ui-v3-message-enter-from,
.doggy-ui-v3-message-leave-to {
  opacity: 0;
}

.doggy-ui-v3-message-enter-to,
.doggy-ui-v3-message-leave-from {
  opacity: 1;
}

.doggy-ui-v3-message {
  transition: all 0.5s;
  position: fixed;
  z-index: 999;
  left: 1em;
  width: fit-content;
  max-width: calc(100vw - 2em);
  font-size: 14px;
  box-sizing: border-box;
  height: 2em;
  padding: 0.5em;
  border-radius: 4px;
  display: flex;
  align-items: center;

  .icon {
    font-size: 16px;
    flex-shrink: 0;
  }

  .text {
    margin-left: 0.5em;
    color: #ffffff;
    word-break: break-all;
  }

  &.info {
    background: #92c1e9;

    .icon {
      color: #005eb8;
    }
  }

  &.success {
    background: #81d3ae;

    .icon {
      color: #088d5e;
    }
  }

  &.error {
    background: #ee8a82;

    .icon {
      color: #ba481b;
    }
  }
}
</style>
