import { defineStore } from 'pinia'
import { computed, type Ref, ref } from 'vue'

export interface Todo {
  id: number
  text: string
  complete: boolean
}

export const useTodoStore = defineStore('todos', () => {
  let id = 0
  const inputValue = ref('')
  const showCompleted = ref(false)

  const todos: Ref<Todo[]> = ref([
    { id: id++, text: 'Learn HTML', complete: false },
    { id: id++, text: 'Learn JavaScript', complete: false },
    { id: id++, text: 'Learn Vue', complete: false }
  ])

  const filteredTodos = computed(() => {
    return showCompleted.value ? todos.value.filter((todo) => todo.complete) : todos.value
  })
  const addTodo = () => {
    todos.value.push({ id: id++, text: inputValue.value, complete: false })
    inputValue.value = ''
  }
  const removeTodo = (id: number) => {
    todos.value = todos.value.filter((t) => t.id !== id)
  }

  return {
    filteredTodos,
    addTodo,
    removeTodo,
    inputValue,
    showCompleted
  }
})
