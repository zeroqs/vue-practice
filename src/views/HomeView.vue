<script setup lang="ts">
import BaseLayout from '@/shared/ui/BaseLayout.vue'
import Card from 'primevue/card'
</script>

<template>
  <BaseLayout>
    <template #content>
      <div class="content">
        <RouterLink to="/todo">
          <Card class="card">
            <template #title>TodoApp</template>
            <template #content>
              <p>Go to the todo page</p>
            </template>
          </Card>
        </RouterLink>
        <RouterLink to="/chat">
          <Card class="card">
            <template #title>ChatApp</template>
            <template #content>
              <p>Go to the chat page</p>
            </template>
          </Card>
        </RouterLink>
      </div>
    </template>
  </BaseLayout>
</template>

<style scoped>
.content {
  display: flex;
  gap: 25px;
}

.card {
  color: var(--vt-c-text-dark-2);
  background-color: var(--vt-c-divider-dark-1);
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>