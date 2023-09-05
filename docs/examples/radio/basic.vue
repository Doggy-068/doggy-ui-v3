<script setup lang="ts">
import { ref } from 'vue'
import { DuRadio, DuRadioOption } from 'doggy-ui-v3'

const value = ref<string>('')
</script>

<template>
  <du-radio v-model="value">
    <du-radio-option value="Option 1">Option 1</du-radio-option>
    <du-radio-option value="Option 2">Option 2</du-radio-option>
    <du-radio-option value="Option 3">Option 3</du-radio-option>
  </du-radio>
</template>
