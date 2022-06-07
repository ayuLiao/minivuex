import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// import store from './store'

// createApp(App).use(store).mount('#app')

const app = createApp(App)
const pinia = createPinia()
app.use(pinia).mount('#app')