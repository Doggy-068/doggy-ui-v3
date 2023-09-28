<script setup lang="ts">
import { DuTooltip, DuButton, DuTag } from 'doggy-ui-v3'
</script>

<template>
  <du-tooltip>
    <template #tooltip>
      <div style="padding: 0.5em 0">
        <du-tag>This is a tag in tooltip!</du-tag>
      </div>
    </template>
    <du-button size="small">A Button</du-button>
  </du-tooltip>
</template>
