<script setup lang="ts">
import { DuBadge, DuButton } from 'doggy-ui-v3'
</script>

<template>
  <div style="display: flex; align-items: center">
    <du-badge numeric :value="100">
      <du-button>Default</du-button>
    </du-badge>
    <du-badge numeric :value="20" :max="10" style="margin-left: 1em">
      <du-button>Max</du-button>
    </du-badge>
  </div>
</template>
