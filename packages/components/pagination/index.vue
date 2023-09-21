<script setup lang="ts">
import { IconLeft, IconRight } from '../../icon'
import { computed } from 'vue'
import { first, last } from '../../utils/array'

defineOptions({
  name: 'du-pagination'
})

const props = withDefaults(defineProps<{
  total: number
  size?: number
  index: number
  pager?: number
}>(), {
  size: 10,
  pager: 7
})

const emits = defineEmits<{
  (e: 'update:index', val: number): void
}>()

const maxIndex = computed(() => Math.floor(props.total / props.size))

const pagers = computed(() => {
  const items: number[] = []
  if (maxIndex.value <= props.pager) {
    for (let i = 1; i <= maxIndex.value; i++) {
      items.push(i)
    }
    return items
  }
  const gap = Math.floor(props.pager / 2) - 1
  let min = props.index - gap
  let max = props.index + gap
  if (min <= 1) {
    max += (2 - min)
    min = 1
  } else if (max >= maxIndex.value) {
    min -= (max - maxIndex.value + 1)
    max = maxIndex.value
  }
  for (let i = min; i <= max; i++) {
    items.push(i)
  }
  if (first(items) === 2) {
    items.unshift(1)
  } else if (first(items) >= 3) {
    items.unshift(1, NaN)
  }
  if (last(items) === maxIndex.value - 1) {
    items.push(maxIndex.value)
  } else if (last(items) <= maxIndex.value - 2) {
    items.push(NaN, maxIndex.value)
  }
  return items
})

const handlePrevItemClick = () => {
  if (props.index > 1) {
    emits('update:index', props.index - 1)
  }
}

const handleNextItemClick = () => {
  if (props.index < maxIndex.value) {
    emits('update:index', props.index + 1)
  }
}
</script>

<template>
  <div class="doggy-ui-v3-pagination">
    <span class="item prev" @click="handlePrevItemClick">
      <icon-left />
    </span>
    <span v-for="item of pagers" class="item" :key="item.toString()" :class="[item === props.index ? 'current' : '']" @click="isNaN(item) ? null : emits('update:index', item)">{{ isNaN(item) ? '...' : item }}</span>
    <span class="item next" @click="handleNextItemClick">
      <icon-right />
    </span>
  </div>
</template>

<style lang="scss">
.doggy-ui-v3-pagination {
  font-size: 14px;
  display: flex;
  align-items: center;

  .item {
    flex-shrink: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;

    &:not(:first-of-type) {
      margin-left: 0.5em;
    }

    &.current {
      color: var(--du--v3--primary--color);
    }
  }
}
</style>
