<script setup lang="ts">
import { ref } from 'vue'
import { DuInput } from 'doggy-ui-v3'

const value = ref<string>('')
</script>

<template>
  <du-input v-model="value" clearable />
</template>
