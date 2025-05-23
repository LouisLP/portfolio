import { createApp } from 'vue'

import { i18n } from './i18n'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
