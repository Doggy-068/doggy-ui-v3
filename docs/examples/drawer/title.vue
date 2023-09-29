<script setup lang="ts">
import { DuDrawer, DuTag, DuButton } from 'doggy-ui-v3'
import { ref } from 'vue'

const showDrawer = ref(false)
</script>

<template>
  <du-button @click="showDrawer = true" size="small">Open Drawer</du-button>
  <du-drawer v-model="showDrawer">
    <template #title>
      <du-tag>Oh, a title.</du-tag>
    </template>
    <p>This is content...</p>
  </du-drawer>
</template>
