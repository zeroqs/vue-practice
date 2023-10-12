<script setup lang="ts">
import BaseLayout from '@/shared/ui/BaseLayout.vue'
import { useChat } from '@/store/chat/chat'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import { useRoute } from 'vue-router'
import Button from 'primevue/button'

const store = useChat()
const route = useRoute()
const { chat } = storeToRefs(store)
const { addMessage } = store

const value = ref('')

const sendMessage = () => {
  addMessage(value.value, Number(route.params.id))
  value.value = ''
}
</script>

<template>
  <BaseLayout>
    <template #default>
      <main class="main">
        <div class="left-side">
          <ul class="users">
            <template v-for="item in chat" :key="item.id">
              <RouterLink :to="{ name: 'UserMessage', params: { id: item.id } }" class="link">
                <li class="user">
                  {{ item.nickname }}
                </li>
              </RouterLink>
            </template>
          </ul>
        </div>
        <div class="right-side">
          <router-view></router-view>
          <div>
            <InputText v-model="value" type="text" />
            <Button @click="sendMessage">Send message</Button>
          </div>
        </div>
      </main>
    </template>
  </BaseLayout>
</template>

<style scoped>
.main {
  display: flex;
  padding: 20px;
}

.left-side {
  flex: 0 1 10%;
}

.right-side {
  padding: 50px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 30px;
}

.user {
  background-color: var(--vt-c-divider-dark-1);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}

.link {
  text-align: center;
}
</style>