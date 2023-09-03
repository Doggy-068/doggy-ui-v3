<script setup lang="ts">
import { ref } from 'vue'
import { DuTag } from 'doggy-ui-v3'

const tags = ref<string[]>(['Cola', 'Juice'])

const handleTagClose = (idx: number) => {
  tags.value.splice(idx, 1)
}
</script>

<template>
  <du-tag v-for="(item, idx) of tags" :key="item" closeable @close="handleTagClose(idx)">{{ item }}</du-tag>
</template>
