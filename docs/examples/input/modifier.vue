<script setup lang="ts">
import { ref } from 'vue'
import { DuInput } from 'doggy-ui-v3'

const value1 = ref<string>('')
const value2 = ref<number>(0)
const value3 = ref<string>('')
</script>

<template>
  <du-input v-model.trim="value1" style="margin-bottom: 0.5em" />
  <du-input v-model.number="value2" style="margin-bottom: 0.5em" />
  <du-input v-model.capitalize="value3" />
</template>
