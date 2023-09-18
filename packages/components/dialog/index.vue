<script setup lang="ts">
import { IconClose } from '../../icon'

defineOptions({
  name: 'du-dialog'
})

const props = withDefaults(defineProps<{
  modelValue: boolean
  close?: boolean
}>(), {
  close: true
})

const emits = defineEmits<{
  (e: 'update:modelValue', val: typeof props.modelValue): void
}>()
</script>

<template>
  <Teleport to="body">
    <Transition name="doggy-ui-v3-dialog">
      <div v-if="props.modelValue" class="doggy-ui-v3-dialog">
        <div class="box">
          <div class="header">
            <icon-close v-if="props.close" class="icon" @click="emits('update:modelValue', false)" />
          </div>
          <div class="content">
            <slot></slot>
          </div>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
.doggy-ui-v3-dialog-enter-from,
.doggy-ui-v3-dialog-leave-to {
  opacity: 0;
}

.doggy-ui-v3-dialog-enter-active,
.doggy-ui-v3-dialog-leave-active {
  transition: opacity 0.2s;
}

.doggy-ui-v3-dialog-enter-to,
.doggy-ui-v3-dialog-leave-from {
  opacity: 1;
}

.doggy-ui-v3-dialog {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba($color: #eeeeee, $alpha: 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  .box {
    padding: 1em;
    background: #ffffff;
    border-radius: 4px;

    .header {
      display: flex;
      justify-content: flex-end;

      .icon {
        font-size: 16px;
        cursor: pointer;
      }
    }

    .content {
      padding: 1em 0;
    }
  }
}
</style>
