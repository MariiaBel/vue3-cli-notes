import {createApp} from 'vue'
import App from './App.vue'

import './assets/sass/main.sass'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')