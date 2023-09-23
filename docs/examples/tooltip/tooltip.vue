<script setup lang="ts">
import { DuTooltip, DuButton, DuTag } from 'doggy-ui-v3'
</script>

<template>
  <du-tooltip>
    <template #tooltip>
      <du-tag>This is a tag in tooltip!</du-tag>
    </template>
    <du-button size="small">A Button</du-button>
  </du-tooltip>
</template>
