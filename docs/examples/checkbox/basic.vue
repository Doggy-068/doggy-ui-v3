<script setup lang="ts">
import { ref } from 'vue'
import { DuCheckbox, DuCheckboxOption } from 'doggy-ui-v3'

const value = ref<string[]>([])
</script>

<template>
  <du-checkbox v-model="value">
    <du-checkbox-option value="option 1">Option 1</du-checkbox-option>
    <du-checkbox-option value="option 2">Option 2</du-checkbox-option>
  </du-checkbox>
</template>
