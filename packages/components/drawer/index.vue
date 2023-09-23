<script setup lang="ts">
import { IconUp, IconRight, IconDown, IconLeft } from '../../icon'
import { computed, ref } from 'vue'

defineOptions({
  name: 'du-drawer'
})

const props = withDefaults(defineProps<{
  modelValue: boolean
  position?: 'top' | 'right' | 'bottom' | 'left'
}>(), {
  position: 'right'
})

const emits = defineEmits<{
  (e: 'update:modelValue', val: typeof props.modelValue): void
}>()

const icon = computed(() => {
  switch (props.position) {
    case 'top':
      return IconUp
    case 'bottom':
      return IconDown
    case 'left':
      return IconLeft
    case 'right':
      return IconRight
  }
})

const done = ref(false)
</script>

<template>
  <Teleport to="body">
    <Transition name="doggy-ui-v3-drawer" @after-enter="done = true" @before-leave="done = false">
      <div class="doggy-ui-v3-drawer" v-show="props.modelValue">
        <div class="drawer" :class="[props.position, done ? 'done' : '']">
          <div class="header">
            <component :is="icon" style="cursor: pointer" @click="emits('update:modelValue', false)" />
          </div>
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
$widthH: 70%;
$maxWidthH: 400px;
$heightV: 40%;

.doggy-ui-v3-drawer-enter-active,
.doggy-ui-v3-drawer-leave-active {
  transition: all 1s;

  .drawer {
    transition: all 1s;
  }
}

.doggy-ui-v3-drawer-enter-to,
.doggy-ui-v3-drawer-leave-from {
  .drawer {
    &.top {
      top: 0;
    }

    &.bottom {
      bottom: 0;
    }

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }
}

.doggy-ui-v3-drawer-enter-from,
.doggy-ui-v3-drawer-leave-to {
  .drawer {
    &.top {
      top: -#{$heightV};
    }

    &.bottom {
      bottom: -#{$heightV};
    }

    &.left {
      left: max(-#{$widthH}, -#{$maxWidthH});
    }

    &.right {
      right: max(-#{$widthH}, -#{$maxWidthH});
    }
  }
}

.doggy-ui-v3-drawer {
  overflow: hidden;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--du--v3--modal--background);

  .drawer {
    font-size: 14px;
    position: absolute;
    background: var(--du--v3--white);
    box-sizing: border-box;
    padding: 1em;

    &.top {
      height: $heightV;
      width: 100%;

      &.done {
        top: 0;
      }
    }

    &.bottom {
      height: $heightV;
      width: 100%;

      &.done {
        bottom: 0;
      }
    }

    &.left {
      width: $widthH;
      max-width: $maxWidthH;
      height: 100%;

      &.done {
        left: 0;
      }
    }

    &.right {
      width: $widthH;
      max-width: $maxWidthH;
      height: 100%;

      &.done {
        right: 0;
      }
    }

    .header {
      font-size: 16px;
      padding-bottom: 1em;
    }
  }
}
</style>
