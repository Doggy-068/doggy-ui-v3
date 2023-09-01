<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import highlight from '../utils/highlight'

const examples = getCurrentInstance()?.appContext.config.globalProperties.examples

const props = defineProps<{
  path: string
  code: string
}>()

const highlightCode = highlight.highlight(decodeURIComponent(props.code), { language: 'html' }).value
</script>

<template>
  <div class="examples-showcase">
    <div class="component-box">
      <component :is="examples[props.path].default" />
    </div>
    <div style="overflow: auto">
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

.component-box {
  padding-bottom: 1em;
  border-bottom: 1px solid $color;
}
</style>
