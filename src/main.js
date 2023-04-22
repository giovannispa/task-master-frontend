import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Importando o css
import './assets/css/app.css'
import IconShowMore from "./components/icons/IconShowMore.vue";
import Default from "./components/layout/Default.vue";
import Login from "./components/layout/Login.vue";

const app = createApp(App)
app.component('IconShowMore', IconShowMore);
app.component('default-layout', Default);
app.component('login-layout', Login);

app.use(router)

app.mount('#app')
