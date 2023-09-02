<script setup lang="ts">
import { DuButton, message } from 'doggy-ui-v3'

const handleButtonClick = (duration?: number) => {
  message({
    text: `This is a message.`,
    duration
  })
}
</script>

<template>
  <du-button @click="handleButtonClick()">Default</du-button>
  <du-button @click="handleButtonClick(10000)">10000 ms</du-button>
</template>
