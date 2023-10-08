<script setup lang="ts">
import TodoList from '@/components/TodoList.vue'
import FilterControls from '@/components/FilterControls.vue'
import InputControls from '@/components/InputControls.vue'
import { useTodos } from '@/utils/useTodos'

const { inputValue, removeTodo, filteredTodos, addTodo, showCompleted } = useTodos()
</script>

<template>
  <InputControls v-model="inputValue" @add-todo="addTodo" />
  <FilterControls @set-filter-todo="(filters: boolean) => (showCompleted = filters)" />
  <TodoList @delete-todo="removeTodo" :filtered-todos="filteredTodos" />
</template>

<style scoped></style>