<script setup lang="ts">
import { IconCopy, IconSuccess } from '../../icon'
import { ref } from 'vue'
import { CopyState } from './enum'

defineOptions({
  name: 'du-text'
})

const props = withDefaults(defineProps<{
  copy?: boolean
  ellipsis?: boolean
  width?: string
}>(), {
  copy: false,
  ellipsis: false
})

const content = ref<HTMLSpanElement>()

const copyState = ref<CopyState>(CopyState.Wait)

const handleCopyClick = async () => {
  const text = content.value?.textContent
  if (typeof text !== 'string') return
  await navigator.clipboard.writeText(text)
  copyState.value = CopyState.Success
  setTimeout(() => {
    copyState.value = CopyState.Wait
  }, 2000)
}
</script>

<template>
  <span class="doggy-ui-v3-text" :style="{ width: props.width }">
    <span ref="content" class="content" :class="[props.ellipsis ? 'ellipsis' : '']">
      <slot></slot>
    </span>
    <span v-if="props.copy" style="margin-left: 0.5em; cursor: pointer; height: 1em">
      <icon-copy v-if="copyState === CopyState.Wait" @click="handleCopyClick" />
      <icon-success v-else-if="copyState === CopyState.Success" style="cursor: default" />
    </span>
  </span>
</template>

<style lang="scss">
.doggy-ui-v3-text {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  width: 100%;
  max-width: fit-content;

  .content {
    width: 100%;

    &.ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
