<script setup lang="ts">
import { DuProgress } from 'doggy-ui-v3'

const color = [{
  color: '#ade4bd',
  percentage: 10
}, {
  color: '#4ffe7f',
  percentage: 50
}, {
  color: '#4b8e62',
  percentage: 70
}]
</script>

<template>
  <du-progress :color="color" :progress="15" style="margin-bottom: 0.5em" />
  <du-progress :color="color" :progress="65" style="margin-bottom: 0.5em" />
  <du-progress :color="color" :progress="85" />
</template>
