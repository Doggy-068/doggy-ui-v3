<script setup lang="ts">
import type { Props } from './types'
import { IconError, IconInfo, IconSuccess } from '../../icon'
import { computed } from 'vue'

defineOptions({
  name: 'du-message'
})

const props = withDefaults(defineProps<Props>(), {
  type: 'info'
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
  <div class="doggy-ui-v3-message" :class="[`${props.type}`]">
    <component :is="icon" class="icon" />
    <span class="text">{{ props.text }}</span>
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-message {
  font-size: 14px;
  box-sizing: border-box;
  width: 50vw;
  max-width: 240px;
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
