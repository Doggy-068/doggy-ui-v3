<script setup lang="ts">
import { ref } from 'vue'
import { vSpin, DuButton } from 'doggy-ui-v3'

const isLoading = ref(true)
</script>

<template>
  <du-button @click="isLoading = !isLoading">Toggle</du-button>
  <div v-spin="isLoading" style="height: 200px; display: flex; justify-content: center; align-items: center">
    <span>Something in this box...</span>
  </div>
</template>
