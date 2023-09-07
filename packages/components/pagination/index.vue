<script setup lang="ts">
import { IconLeft, IconRight } from '../../icon'
import { computed } from 'vue'

defineOptions({
  name: 'du-pagination'
})

const props = withDefaults(defineProps<{
  total: number
  size?: number
  index: number
}>(), {
  size: 10
})

const emits = defineEmits<{
  (e: 'update:index', val: number): void
}>()

const maxIndex = computed(() => Math.floor(props.total / props.size))

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
    <span v-for="n in maxIndex" class="item" :key="n" :class="[n === props.index ? 'current' : '']" @click="emits('update:index', n)">{{ n }}</span>
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
