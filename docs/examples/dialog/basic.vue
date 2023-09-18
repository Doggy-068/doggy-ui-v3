<script setup lang="ts">
import { DuDialog, DuButton, DuInput } from 'doggy-ui-v3'
import { ref } from 'vue'
const render = ref(false)
const text = ref('')
</script>

<template>
  <du-button @click="render = true">Open Dialog</du-button>
  <du-dialog v-model="render" :close="false">
    <du-input v-model="text" />
    <template #footer>
      <div style="display: flex; justify-content: flex-end">
        <du-button>Confirm</du-button>
        <du-button type="warning" @click="render = false">Cancel</du-button>
      </div>
    </template>
  </du-dialog>
</template>
