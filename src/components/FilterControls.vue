<script setup lang="ts">
import Button from 'primevue/button'

const emit = defineEmits(['setFilterTodo'])
</script>

<template>
  <div class="filterControls">
    <Button @click="emit('setFilterTodo', false)">All</Button>
    <Button @click="emit('setFilterTodo', true)">Completed</Button>
  </div>
</template>

<style scoped>
.filterControls {
  display: flex;
  gap: 10px;
}
</style>