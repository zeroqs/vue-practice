<script setup lang="ts">
import BaseLayout from '@/shared/ui/BaseLayout.vue'
import FilterControls from '@/components/FilterControls.vue'
import TodoList from '@/components/TodoList.vue'
import InputControls from '@/components/InputControls.vue'
import { useTodoStore } from '@/store/todo/todoStore'

const store = useTodoStore()
</script>

<template>
  <BaseLayout>
    <template #content>
      <InputControls v-model="store.inputValue" @add-todo="store.addTodo" />
      <FilterControls @set-filter-todo="(filters: boolean) => (store.showCompleted = filters)" />
      <TodoList :filtered-todos="store.filteredTodos" @delete-todo="store.removeTodo" />
    </template>
  </BaseLayout>
</template>