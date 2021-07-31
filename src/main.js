import {createApp} from 'vue'
import App from './App.vue'

import './assets/sass/main.sass'
import router from './router'

// Vue.config.productionTip = false

const app = createApp(App)
app.use(router)
app.mount('#app')