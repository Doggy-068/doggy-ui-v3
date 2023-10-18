<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { getInstanceBySearchParent } from '../../../../utils/component'

defineOptions({
  name: 'du-dropdown-option'
})

const props = defineProps<{
  command: string
}>()

const instance = getCurrentInstance()

const handleItemClick = () => {
  const dropdown = getInstanceBySearchParent(instance, 'du-dropdown')
  dropdown?.emit('command', props.command)
  if (dropdown && dropdown.exposeProxy) {
    dropdown.exposeProxy.showDropdown = false
  }
}
</script>

<template>
  <div class="doggy-ui-v3-dropdown-option" @click="handleItemClick">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-dropdown-option {
  display: flex;
  align-items: center;
  padding: 0.5em;
  cursor: pointer;

  &:hover {
    background: var(--du--v3--primary--color--opacity);
  }
}
</style>
