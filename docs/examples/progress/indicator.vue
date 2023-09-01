<script setup lang="ts">
import { DuProgress } from 'doggy-ui-v3'

const indicatorFormatter = (progress: number) => `-${progress}-`
</script>

<template>
  <du-progress :progress="40" style="margin-bottom: 0.5em" />
  <du-progress :progress="60" indicator style="margin-bottom: 0.5em" />
  <du-progress :progress="80" indicator :indicator-formatter="indicatorFormatter" />
</template>
