<script setup lang="ts">
import { DuBadge, DuButton } from 'doggy-ui-v3'
</script>

<template>
  <div style="display: flex; align-items: center">
    <du-badge value="100">
      <du-button>Normal</du-button>
    </du-badge>
    <du-badge value="color" color="#8d89f5" style="margin-left: 1em">
      <du-button>Color</du-button>
    </du-badge>
  </div>
</template>
