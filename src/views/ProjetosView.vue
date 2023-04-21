<template>
  <div class="container mx-auto">
    <div class="pt-4 pb-2 ml-4 md:ml-0">
      <a href="" class="flex w-40 mt-4 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg
    shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        <icon-plus/> Novo projeto
      </a>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
      <CardProjetos title="Task-master Front-end" status="Completo" date-limit="25/05/2023" />
      <CardProjetos title="Task-master Front-end" status="Completo" date-limit="25/05/2023" />
      <CardProjetos title="Task-master Front-end" status="Completo" date-limit="25/05/2023" />
    </div>
  </div>
</template>

<script setup>

import IconPlus from "../components/icons/IconPlus.vue";
import CardProjetos from "../components/cards/CardProjetos.vue";
</script>

<style scoped>

</style>