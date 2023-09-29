<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue'
import highlight from '../utils/highlight'
import { DocIconCode, DocIconCopy } from '../icon'
import { DuTooltip, message } from 'doggy-ui-v3'

const examples = getCurrentInstance()?.appContext.config.globalProperties.examples

const props = defineProps<{
  path: string
  code: string
}>()

const highlightCode = highlight.highlight(decodeURIComponent(props.code), { language: 'html' }).value

const isCodeShow = ref(true)

const handleCopyClick = async () => {
  await navigator.clipboard.writeText(decodeURIComponent(props.code))
  message({ type: 'success', text: 'successfully copied!' })
}
</script>

<template>
  <div class="examples-showcase">
    <div>
      <component :is="examples[props.path].default" />
    </div>
    <div class="control-box">
      <du-tooltip :text="isCodeShow ? 'hide code' : 'show code'">
        <doc-icon-code @click="isCodeShow = !isCodeShow" style="cursor: pointer" :style="{ color: isCodeShow ? 'var(--docsearch-primary-color)' : 'var(--vp-c-text-1)' }" />
      </du-tooltip>
      <du-tooltip text="copy code">
        <doc-icon-copy @click="handleCopyClick" style="cursor: pointer" />
      </du-tooltip>
    </div>
    <div v-show="isCodeShow" style="overflow: auto">
      <pre v-html="highlightCode"></pre>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$color: #e9e9e9;

.examples-showcase {
  padding: 1em;
  border: 1px solid $color;
  border-radius: 8px;
}

.control-box {
  padding: 0.5em 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 1em;
  border-bottom: 1px solid $color;
}
</style>
