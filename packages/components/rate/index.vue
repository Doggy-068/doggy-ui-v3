<script setup lang="ts">
import { IconStar } from '../../icon'

const props = withDefaults(defineProps<{
  modelValue: number
  max?: number
}>(), {
  max: 5
})

const emits = defineEmits<{
  (e: 'update:modelValue', val: typeof props.modelValue): void
}>()
</script>

<template>
  <div class="doggy-ui-v3-rate">
    <icon-star class="icon" v-for="ord in props.max" :key="ord" :full="ord <= props.modelValue" @click="emits('update:modelValue', ord)" />
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-rate {
  display: flex;
  align-items: center;
  color: #ffc702;
  font-size: 16px;

  .icon {
    cursor: pointer;
    margin-left: 0.2em;
  }
}
</style>
