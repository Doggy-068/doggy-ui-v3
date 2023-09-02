<script setup lang="ts">
import { DuButton, message } from 'doggy-ui-v3'

const handleButtonClick = (type: string) => {
  message({
    type,
    text: `This is a ${type} message.`
  })
}
</script>

<template>
  <du-button @click="handleButtonClick('info')">Info</du-button>
  <du-button @click="handleButtonClick('success')">Success</du-button>
  <du-button @click="handleButtonClick('error')">Error</du-button>
</template>
