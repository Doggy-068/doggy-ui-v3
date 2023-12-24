<script setup lang="ts">
import { DuButton, notification } from 'doggy-ui-v3'

const handleButtonClick = () => {
  notification({
    title: 'Notification',
    content: 'This is a text content'
  })
}
</script>

<template>
  <du-button @click="handleButtonClick">Notification</du-button>
</template>
