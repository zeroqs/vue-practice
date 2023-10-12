<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import type { Todo } from '@/store/todo/todoStore'

defineProps<{
  filteredTodos: Todo[]
}>()

const emit = defineEmits(['deleteTodo'])
</script>

<template>
  <template v-if="filteredTodos.length === 0">
    <h1>Завершенных задач нет</h1>
  </template>
  <ul class="cards">
    <li v-for="todo in filteredTodos" :key="todo.id">
      <Card class="card">
        <template #title
          ><span :class="{ title: todo.complete }">Todo number {{ todo.id + 1 }}</span></template
        >
        <template #content>
          <p>
            {{ todo.text }}
          </p>
        </template>
        <template #footer>
          <div class="footer">
            <Button severity="danger" @click="emit('deleteTodo', todo.id)">delete</Button>
            <Checkbox v-model="todo.complete" class="checkbox" :binary="true" />
          </div>
        </template>
      </Card>
    </li>
  </ul>
</template>

<style scoped>
.cards {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card {
  color: var(--vt-c-text-dark-2);
  background-color: var(--vt-c-divider-dark-1);
  width: 25em;
}

.title {
  text-decoration: line-through;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>