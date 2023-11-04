<script setup lang="ts">
import { ref } from 'vue'
import { DuSelect, DuSelectOption } from 'doggy-ui-v3'

const value = ref<string>('')
</script>

<template>
  <du-select v-model="value">
    <du-select-option value="Value 1" label="Label 1">Option 1</du-select-option>
    <du-select-option value="Value 2" label="Label 2">Option 2</du-select-option>
    <du-select-option value="Value 3" label="Label 3">Option 3</du-select-option>
  </du-select>
</template>
