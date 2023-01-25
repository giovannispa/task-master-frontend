<template>
  <!-- Sidebar -->
  <div class="w-80 h-full bg-gray-200 text-white">
    <div class="h-12 bg-gray-700 flex justify-center items-center">
      <div class="px-5">
        <h3 class="font-bold text-xl">Task Master</h3>
      </div>
    </div>
    <div class="h-full bg-gray-800 py-4">
      <div class="px-5 flex flex-col justify-between space-y-2.5">
        <NavLink url="/">
          <IconHome/>
          Home
        </NavLink>
        <NavLink url="/projetos">
          <IconProjects/>
          Projetos
        </NavLink>
        <NavLink url="/tarefas">
          <IconIssues/>
          Tarefas
        </NavLink>
        <NavLink url="/equipes">
          <IconTeams/>
          Equipes
        </NavLink>
        <NavLink url="/relatorios">
          <IconReport/>
          Relatórios
        </NavLink>
        <NavLink url="/usuarios">
          <IconUsers/>
          Usuários
        </NavLink>
      </div>
    </div>
  </div>
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
</script>

<style scoped>

</style>