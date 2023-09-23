<script setup lang="ts">
import { DuDrawer, DuButton, DuRadio, DuRadioOption } from 'doggy-ui-v3'
import { ref } from 'vue'
const position = ref('left')
const showDrawer = ref(false)
</script>

<template>
  <du-radio v-model="position" style="margin-bottom: 0.5em">
    <du-radio-option value="left">left</du-radio-option>
    <du-radio-option value="top">top</du-radio-option>
    <du-radio-option value="right">right</du-radio-option>
    <du-radio-option value="bottom">bottom</du-radio-option>
  </du-radio>
  <du-button @click="showDrawer = true" size="small">Open Drawer</du-button>
  <du-drawer v-model="showDrawer" :position="position">
    <p>This is a drawer!</p>
  </du-drawer>
</template>
