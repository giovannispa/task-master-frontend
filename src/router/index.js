import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import TarefasView from '../views/TarefasView.vue'
import EquipesView from '../views/EquipesView.vue'
import RelatoriosView from '../views/RelatoriosView.vue'
import UsuariosView from '../views/UsuariosView.vue'

function lazyLoad(view) {
  return () => import(`../views/${view}.vue`);
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyLoad("HomeView")
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: lazyLoad("ProjetosView")
    },
    {
      path: '/tarefas',
      name: 'tarefas',
      component: lazyLoad("TarefasView")
    },
    {
      path: '/equipes',
      name: 'equipes',
      component: lazyLoad("EquipesView")
    },
    {
      path: '/relatorios',
      name: 'relatorios',
      component: lazyLoad("RelatoriosView")
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: lazyLoad("UsuariosView")
    },
    {
      path: '/login',
      name: 'login',
      component: lazyLoad("LoginView"),
      meta: {
        layout: 'login-layout'
      }
    }
  ]
})

export default router
