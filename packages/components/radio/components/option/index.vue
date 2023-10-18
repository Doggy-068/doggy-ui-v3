<script setup lang="ts">
import { getCurrentInstance, computed } from 'vue'
import { IconCircle, IconSelect } from '../../../../icon'
import type { RadioProps } from '../../types'
import { getInstanceBySearchParent } from '../../../../utils/component'

defineOptions({
  name: 'du-radio-option'
})

const instance = getCurrentInstance()

const props = withDefaults(defineProps<{
  value: string
}>(), {})

const isSelected = computed(() => (instance?.parent?.props as RadioProps).modelValue === props.value)

const handleItemClick = () => {
  getInstanceBySearchParent(instance, 'du-radio')?.emit('update:modelValue', props.value)
}
</script>

<template>
  <div class="doggy-ui-v3-radio-option" :class="[isSelected ? 'selected' : '']" @click="handleItemClick">
    <icon-select v-if="isSelected" class="icon" />
    <icon-circle v-else class="icon" />
    <slot></slot>
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-radio-option {
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;

  &:not(:first-of-type) {
    margin-left: 1em;
  }

  &.selected {
    color: var(--du--v3--primary--color);
  }

  .icon {
    margin-right: 0.3em;
  }
}
</style>
