<script setup lang="ts">
import { DuPagination } from 'doggy-ui-v3'
import { ref } from 'vue'

const index = ref<number>(1)
</script>

<template>
  <du-pagination :total="100" v-model:index="index" block />
</template>
