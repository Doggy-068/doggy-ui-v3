<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { getInstanceBySearchParent } from '../../../../utils/component'

defineOptions({
  name: 'du-select-option'
})

const props = withDefaults(defineProps<{
  value: string
  label: string
}>(), {})

const instance = getCurrentInstance()

const handleSelectOptionClick = () => {
  const select = getInstanceBySearchParent(instance, 'du-select')
  select?.emit('update:modelValue', props.value)
  select?.exposed?.closeOption()
}
</script>

<template>
  <div class="doggy-ui-v3-select-option" @click="handleSelectOptionClick">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-select-option {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 2em;
  padding: 0 0.5em;
  background: var(--du--v3--white);

  &:hover {
    background: var(--du--v3--primary--color--opacity);
  }
}
</style>
