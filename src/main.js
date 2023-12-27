import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// createApp(App).mount('#app')

const app = new Vue({
    el: '#app',
    router // Shorthand for router: router
});