<script setup lang="ts">
import { getCurrentInstance, computed } from 'vue'
import { IconSquare, IconCorrect } from '../../../../icon'
import type { CheckboxProps } from '../../types'
import { getInstanceBySearchParent } from '../../../../utils/component'

defineOptions({
  name: 'du-checkbox-option'
})

const instance = getCurrentInstance()

const props = withDefaults(defineProps<{
  value: string
}>(), {})

const isChecked = computed(() => (instance?.parent?.props as CheckboxProps).modelValue.includes(props.value))

const handleItemClick = () => {
  const value: string[] = (() => {
    const modelValue = (instance?.parent?.props as CheckboxProps).modelValue
    if (isChecked.value) {
      const idx = modelValue.findIndex(item => item === props.value)
      return modelValue.slice(0, idx).concat(modelValue.slice(idx + 1))
    } else {
      return modelValue.concat(props.value)
    }
  })()
  getInstanceBySearchParent(instance, 'du-checkbox')?.emit('update:modelValue', value)
}
</script>

<template>
  <div class="doggy-ui-v3-checkbox-option" :class="[isChecked ? 'checked' : '']" @click="handleItemClick">
    <icon-correct v-if="isChecked" class="icon" />
    <icon-square v-else class="icon" />
    <slot></slot>
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-checkbox-option {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:first-of-type) {
    margin-left: 1em;
  }

  &.checked {
    color: var(--du--v3--primary--color);
  }

  .icon {
    margin-right: 0.3em;
  }
}
</style>
