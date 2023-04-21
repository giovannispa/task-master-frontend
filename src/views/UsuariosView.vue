<template>
  <div class="container mx-auto">
    <div class="pt-4 pb-2 ml-2 md:ml-0">
      <a href="" class="flex w-40 mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg
    shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        <icon-plus/> Novo usuário
      </a>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-2 p-2 md:p-0">
      <CardUsers name="Bonnie Green" image="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
        category="Visual Designer" status="Ativo"/>
      <CardUsers name="Bonnie Green" image="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                 category="Visual Designer" status="Ativo"/>
      <CardUsers name="Bonnie Green" image="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                 category="Visual Designer" status="Ativo"/>
      <CardUsers name="Bonnie Green" image="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                 category="Visual Designer" status="Ativo"/>
      <CardUsers name="Bonnie Green" image="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                 category="Visual Designer" status="Ativo"/>
      <CardUsers name="Bonnie Green" image="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                 category="Visual Designer" status="Ativo"/>
      <CardUsers name="Bonnie Green" image="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                 category="Visual Designer" status="Ativo"/>
      <CardUsers name="Bonnie Green" image="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                 category="Visual Designer" status="Ativo"/>
    </div>
  </div>
</template>

<script setup>

import IconPlus from "../components/icons/IconPlus.vue";
import CardUsers from "../components/cards/CardUsers.vue";
</script>

<style scoped>

</style>