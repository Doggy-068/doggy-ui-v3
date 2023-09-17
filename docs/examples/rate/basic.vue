<script setup lang="ts">
import { DuRate } from 'doggy-ui-v3'
import { ref } from 'vue'
const value = ref(3)
</script>

<template>
  <du-rate v-model="value" />
</template>
