<script setup lang="ts">
import { IconClose } from '../../icon'

defineOptions({
  name: 'du-dialog'
})

const props = withDefaults(defineProps<{
  modelValue: boolean
}>(), {})

const emits = defineEmits<{
  (e: 'update:modelValue', val: typeof props.modelValue): void
}>()
</script>

<template>
  <Teleport to="body">
    <div v-if="props.modelValue" class="doggy-ui-v3-dialog">
      <div class="box">
        <div class="header">
          <icon-close class="icon" @click="emits('update:modelValue', false)" />
        </div>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss">
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

  .header {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 1em;

    .icon {
      font-size: 16px;
      cursor: pointer;
    }
  }

  .box {
    padding: 1em;
    background: #ffffff;
    border-radius: 4px;
  }
}
</style>
