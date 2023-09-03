<script setup lang="ts">
import { DuTag } from 'doggy-ui-v3'
import { ref } from 'vue'

const colors = ref<string[]>(['#de7c00', '#91bb31', '#4071a6'])
</script>

<template>
  <du-tag v-for="item of colors" :key="item" :color="item">{{ item }}</du-tag>
</template>
