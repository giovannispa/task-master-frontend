<template>
  <!-- Sidebar -->
  <aside class="flex w-64 flex-col pt-18 pb-6 bg-gray-800">
    <a class="flex items-center justify-center gap-x-4 text-2xl font-medium text-white bg-gray-700 h-12">
      <span>
        Task Master
      </span>
    </a>

    <ul class="flex flex-1 flex-col gap-y-8 px-8 pt-8">
      <li>
        <NavLink url="/">
          <IconHome/>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink url="/projetos">
          <IconProjects/>
          Projetos
        </NavLink>
      </li>
      <li>
        <NavLink url="/tarefas">
          <IconIssues/>
          Tarefas
        </NavLink>
      </li>
      <li>
        <NavLink url="/equipes">
          <IconTeams/>
          Equipes
        </NavLink>
      </li>
      <li>
        <NavLink url="/relatorios">
          <IconReport/>
          Relatórios
        </NavLink>
      </li>
      <li>
        <NavLink url="/usuarios">
          <IconUsers/>
          Usuários
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
import { sidebarWidth } from "../../composables/sidebar";
</script>

<style scoped>

</style>