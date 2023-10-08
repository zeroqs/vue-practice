<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import type { Todo } from '@/utils/useTodos'

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
      <Card style="width: 25em">
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
            <Button @click="emit('deleteTodo', todo.id)" severity="danger">delete</Button>
            <Checkbox v-model="todo.complete" :binary="true" />
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

.title {
  text-decoration: line-through;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>