<script setup lang="ts">
import { DuProgress } from 'doggy-ui-v3'
</script>

<template>
  <du-progress :progress="60" style="margin-bottom: 0.5em" />
  <du-progress :progress="60" animation />
</template>
