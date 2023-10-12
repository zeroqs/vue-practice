import { defineStore } from 'pinia'
import { reactive } from 'vue'

export interface Chat {
  id: number
  nickname: string
  messages: string[]
}

export const useChat = defineStore('chat', () => {
  let id = 0
  const chat: Chat[] = reactive([
    {
      id: id++,
      nickname: 'bob',
      messages: ['hello', 'its me']
    },
    {
      id: id++,
      nickname: 'nick',
      messages: ['lets try', 'test']
    }
  ])

  const getById = (id: number): string[] | null => {
    return chat.find((item) => item.id === id)?.messages ?? null
  }

  const addMessage = (message: string, id: number) => {
    console.log(chat.find((item) => item.id === id))
    return chat.find((item) => item.id === id)!.messages.push(message)
  }

  return {
    chat,
    getById,
    addMessage
  }
})
