<script setup lang="ts">
defineOptions({
  name: 'du-badge'
})

const props = withDefaults(defineProps<{
  color?: string
  value: string | number
  numeric?: boolean
  max?: number
}>(), {
  numeric: false,
  max: 99
})
</script>

<template>
  <div class="doggy-ui-v3-badge">
    <slot></slot>
    <span class="badge" :style="{ background: props.color }">{{ (props.numeric && typeof props.value === 'number' && !isNaN(props.value) && props.value > props.max) ? `${props.max}+` : props.value }}</span>
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
