<script setup lang="ts">
import { DuRate } from 'doggy-ui-v3'
import { ref } from 'vue'

const value = ref(1)
const color = [
  { color: '#bfbfbf', value: 1 },
  { color: '#f4c400', value: 3 },
  { color: '#f6ab00', value: 5 }
]
</script>

<template>
  <du-rate v-model="value" :color="color" />
</template>
