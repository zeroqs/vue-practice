import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import UserMessage from '@/components/UserMessage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/ChatView.vue'),
      children: [
        {
          path: ':id',
          name: 'UserMessage',
          component: UserMessage
        }
      ]
    }
  ]
})

export default router
