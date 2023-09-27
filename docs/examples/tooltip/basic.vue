<script setup lang="ts">
import { ref } from 'vue'
import { DuTooltip, DuButton, DuRadio, DuRadioOption } from 'doggy-ui-v3'
const position = ref('top')
const trigger = ref('hover')
</script>

<template>
  <du-radio v-model="position" style="margin-bottom: 0.5em">
    <du-radio-option value="top">top</du-radio-option>
    <du-radio-option value="left">left</du-radio-option>
    <du-radio-option value="bottom">bottom</du-radio-option>
    <du-radio-option value="right">right</du-radio-option>
  </du-radio>
  <du-radio v-model="trigger" style="margin-bottom: 0.5em">
    <du-radio-option value="hover">hover</du-radio-option>
    <du-radio-option value="click">click</du-radio-option>
  </du-radio>
  <du-tooltip text="This is a tooltip!" :position="position" :trigger="trigger">
    <du-button size="small">A Button</du-button>
  </du-tooltip>
</template>
