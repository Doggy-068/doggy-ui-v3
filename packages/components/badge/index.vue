<script setup lang="ts">
defineOptions({
  name: 'du-badge'
})

const props = withDefaults(defineProps<{
  text: string
  color?: string
}>(), {})
</script>

<template>
  <div class="doggy-ui-v3-badge">
    <slot></slot>
    <span class="badge" :style="{ background: props.color }">{{ props.text }}</span>
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-badge {
  position: relative;
  width: fit-content;

  .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    position: absolute;
    height: 1.4em;
    border-radius: 0.7em;
    top: -0.7em;
    right: -0.5em;
    padding: 0 0.5em;
    background: var(--du--v3--error--color);
    color: #ffffff;
  }
}
</style>
