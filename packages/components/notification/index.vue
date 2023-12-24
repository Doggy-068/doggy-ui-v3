<script setup lang="ts">
import type { Props } from './types'
import { ref, computed, getCurrentInstance } from 'vue'
import { IconError, IconInfo, IconSuccess, IconClose } from '../../icon'

defineOptions({
  name: 'du-notification'
})

const props = withDefaults(defineProps<Props>(), {
  type: 'info'
})

const instance = getCurrentInstance()

const render = ref(true)

const icon = computed(() => {
  if (props.type === 'success') {
    return IconSuccess
  } else if (props.type === 'error') {
    return IconError
  } else {
    return IconInfo
  }
})

const handleCloseClick = () => {
  render.value = false
  setTimeout(() => {
    document.body.removeChild((instance?.proxy?.$el as HTMLElement).parentElement!)
  }, 3000)
}
</script>

<template>
  <Transition name="doggy-ui-v3-notification">
    <div v-if="render" class="doggy-ui-v3-notification" :class="[`${props.type}`]">
      <div class="title">
        <component :is="icon" class="icon" />
        <span class="title-text">{{ props.title }}</span>
        <icon-close style="cursor: pointer" @click="handleCloseClick" />
      </div>
      <div class="content">
        <p>{{ props.content }}</p>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
.doggy-ui-v3-notification-enter-from,
.doggy-ui-v3-notification-leave-to {
  opacity: 0;
}

.doggy-ui-v3-notification-enter-to,
.doggy-ui-v3-notification-leave-from {
  opacity: 1;
}

.doggy-ui-v3-notification {
  transition: all 0.5s;
  position: fixed;
  z-index: 999;
  right: 1em;
  top: 1em;
  width: fit-content;
  max-width: calc(100vw - 2em);
  font-size: 14px;
  box-sizing: border-box;
  padding: 0.5em;
  border-radius: 4px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, .12);
  background: var(--du--v3--white);

  .title {
    font-size: 16px;
    display: flex;
    align-items: center;

    .icon {
      flex-shrink: 0;
    }

    .title-text {
      margin: 0 0.5em;
      font-weight: bold;
    }
  }

  &.info {

    .icon {
      color: #005eb8;
    }
  }

  &.success {

    .icon {
      color: #088d5e;
    }
  }

  &.error {

    .icon {
      color: #ba481b;
    }
  }

  .content {

    p {
      margin: 0.5em 0;
    }
  }
}
</style>
