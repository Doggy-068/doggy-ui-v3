<script setup lang="ts">
import { IconStar } from '../../icon'
import { computed } from 'vue'

defineOptions({
  name: 'du-rate'
})

const props = withDefaults(defineProps<{
  modelValue: number
  max?: number
  color?: { color: string, value: number }[]
}>(), {
  max: 5
})

const emits = defineEmits<{
  (e: 'update:modelValue', val: typeof props.modelValue): void
}>()

const color = computed(() => (props.color?.sort((a, b) => b.value - a.value) || []).find(item => props.modelValue >= item.value)?.color)
</script>

<template>
  <div class="doggy-ui-v3-rate" :style="{ color }">
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
