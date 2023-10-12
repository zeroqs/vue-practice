import './assets/main.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import router from '@/router/router'

const app = createApp(App)
const pinia = createPinia()

app.use(PrimeVue)
app.use(pinia)
app.use(router)

app.mount('#app')
