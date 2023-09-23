<script setup lang="ts">
import * as icons from '../../../packages/icon'
</script>

<template>
  <div style="display: flex; flex-wrap: wrap">
    <div v-for="icon of icons" :key="icon.name" style="display: flex; flex-direction: column; align-items: center; margin-right: 1em">
      <component :is="icon" />
      <p>{{ icon.name }}</p>
    </div>
  </div>
</template>
