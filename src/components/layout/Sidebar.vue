<template>
  <!-- Sidebar -->
  <aside class="flex w-64 flex-col pt-18 pb-6 bg-gray-800 transition-all
              duration-200 ease-in-out" :style="{ width: sidebarWidth }">
    <a class="flex items-center justify-center gap-x-4 text-2xl font-medium text-white bg-gray-700 h-12 overflow-hidden">
      <span>
        Task Master
      </span>
    </a>

    <ul class="flex flex-1 flex-col gap-y-8 px-8 pt-8" v-show="isCollapsed">
      <li>
        <NavLink url="/">
          <IconHome/>
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink url="/projetos">
          <IconProjects/>
          <span>Projetos</span>
        </NavLink>
      </li>
      <li>
        <NavLink url="/tarefas">
          <IconIssues/>
          <span>Tarefas</span>
        </NavLink>
      </li>
      <li>
        <NavLink url="/equipes">
          <IconTeams/>
          <span>Equipes</span>
        </NavLink>
      </li>
      <li>
        <NavLink url="/relatorios">
          <IconReport/>
          <span>Relatórios</span>
        </NavLink>
      </li>
      <li>
        <NavLink url="/usuarios">
          <IconUsers/>
          <span>Usuários</span>
        </NavLink>
      </li>
    </ul>
  </aside>
  <!-- End sidebar -->
</template>

<script setup>
import NavLink from "../ui/NavLink.vue";
import IconHome from "../icons/IconHome.vue";
import IconProjects from "../icons/IconProjects.vue";
import IconIssues from "../icons/IconIssues.vue";
import IconTeams from "../icons/IconTeams.vue";
import IconReport from "../icons/IconReport.vue";
import IconUsers from "../icons/IconUsers.vue";
import { sidebarWidth, isCollapsed } from "../../composables/sidebar";
</script>

<style scoped>

</style>