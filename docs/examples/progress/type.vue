<script setup lang="ts">
import { DuProgress } from 'doggy-ui-v3'
</script>

<template>
  <du-progress type="primary" :progress="40" style="margin-bottom: 0.5em" />
  <du-progress type="warning" :progress="60" style="margin-bottom: 0.5em" />
  <du-progress type="error" :progress="80" />
</template>
