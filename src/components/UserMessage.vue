<script setup lang="ts">
import { useChat } from '@/store/chat/chat'
import { useRoute } from 'vue-router'
import { watchEffect } from 'vue'

const route = useRoute()
const store = useChat()
const { getById } = store

let items: string[]

watchEffect(() => {
  const messages = getById(Number(route.params.id))
  if (messages) {
    items = messages
  }
})
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item" class="message">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped>
.message {
  background-color: var(--vt-c-divider-dark-1);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>