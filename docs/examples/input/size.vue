<script setup lang="ts">
import { ref } from 'vue'
import { DuInput } from 'doggy-ui-v3'

const value1 = ref<string>('')
const value2 = ref<string>('')
</script>

<template>
  <div style="display: flex; align-items: flex-end">
    <du-input v-model="value1" size="small" style="width: 100px; margin-right: 1em" />
    <du-input v-model="value2" size="default" style="width: 120px" />
  </div>
</template>
