import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import TarefasView from '../views/TarefasView.vue'
import EquipesView from '../views/EquipesView.vue'
import RelatoriosView from '../views/RelatoriosView.vue'
import UsuariosView from '../views/UsuariosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: ProjetosView
    },
    {
      path: '/tarefas',
      name: 'tarefas',
      component: TarefasView
    },
    {
      path: '/equipes',
      name: 'equipes',
      component: EquipesView
    },
    {
      path: '/relatorios',
      name: 'relatorios',
      component: RelatoriosView
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: UsuariosView
    },
  ]
})

export default router
