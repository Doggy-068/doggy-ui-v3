<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineOptions({
  name: 'du-dropdown'
})

const props = withDefaults(defineProps<{
  trigger?: 'hover' | 'click'
}>(), {
  trigger: 'hover'
})

const emits = defineEmits<{
  (e: 'command', command: string): void
}>()

const reference = ref<HTMLElement>()
const dropdown = ref<HTMLElement>()
onMounted(() => {
  if (dropdown.value && reference.value) {
    dropdown.value.style.top = `calc(${reference.value.clientHeight}px + 1em)`
  }
})

const showDropdown = ref<boolean>(false)

let timer: NodeJS.Timeout
const handleReferenceMouseenter = () => {
  if (props.trigger === 'hover') {
    showDropdown.value = true
  }
}
const handleReferenceMouseleave = () => {
  if (props.trigger === 'hover') {
    timer = setTimeout(() => {
      showDropdown.value = false
    }, 500)
  }
}
const handleDropdownMouseenter = () => {
  if (props.trigger === 'hover') {
    clearTimeout(timer)
  }
}
const handleDropdownMouseleave = () => {
  if (props.trigger === 'hover') {
    showDropdown.value = false
  }
}

defineExpose({
  showDropdown
})
</script>

<template>
  <div class="doggy-ui-v3-dropdown">
    <div class="reference" ref="reference" @mouseenter="handleReferenceMouseenter" @mouseleave="handleReferenceMouseleave" @click="props.trigger === 'click' ? (showDropdown = !showDropdown) : null">
      <slot></slot>
    </div>
    <Transition name="doggy-ui-v3-dropdown">
      <div class="dropdown" ref="dropdown" v-show="showDropdown" @mouseenter="handleDropdownMouseenter" @mouseleave="handleDropdownMouseleave">
        <slot name="dropdown"></slot>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-dropdown-enter-active,
.doggy-ui-v3-dropdown-leave-active {
  transition: all 0.3s;
}

.doggy-ui-v3-dropdown-enter-to,
.doggy-ui-v3-dropdown-leave-from {
  opacity: 1;
}

.doggy-ui-v3-dropdown-enter-from,
.doggy-ui-v3-dropdown-leave-to {
  opacity: 0;
}

.doggy-ui-v3-dropdown {
  display: flex;
  position: relative;

  .dropdown {
    position: absolute;
    border: 1px solid var(--du--v3--border--color);
    border-radius: 4px;
    background: var(--du--v3--white);
  }
}
</style>
