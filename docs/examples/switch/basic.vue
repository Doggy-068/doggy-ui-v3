<script setup lang="ts">
import { DuSwitch } from 'doggy-ui-v3'
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(false)
</script>

<template>
  <div style="display: flex; align-items: flex-end">
    <du-switch v-model="value1" size="small" />
    <du-switch v-model="value2" style="margin-left: 1em" />
  </div>
</template>
