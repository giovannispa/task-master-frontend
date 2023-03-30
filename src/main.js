import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Importando o css
import './assets/css/app.css'
import IconShowMore from "./components/icons/IconShowMore.vue";

const app = createApp(App)
app.component('IconShowMore', IconShowMore);

app.use(router)

app.mount('#app')
