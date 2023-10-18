<script setup lang="ts">
import { DuDropdown, DuDropdownOption, message, DuRadio, DuRadioOption } from 'doggy-ui-v3'
import { ref } from 'vue'

const trigger = ref<'hover' | 'click'>('hover')

const handleCommand = (command: string) => {
  message({ type: 'info', text: command })
}
</script>

<template>
  <div>
    <du-radio v-model="trigger" style="margin-bottom: 1em">
      <du-radio-option value="hover">hover</du-radio-option>
      <du-radio-option value="click">click</du-radio-option>
    </du-radio>
    <du-dropdown :trigger="trigger" @command="handleCommand">
      <span style="cursor: default">This is a dropdown</span>
      <template #dropdown>
        <du-dropdown-option command="This is option 1">This is option 1</du-dropdown-option>
        <du-dropdown-option command="This is option 2">This is option 2</du-dropdown-option>
      </template>
    </du-dropdown>
  </div>
</template>
