<template>
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
      <Dropdown :title="{ type: 'icon', icon: 'IconShowMore' }">
        <DropdownItem :to="{ name: 'projetos'}">
          <div class="flex">
            Desativar
          </div>
        </DropdownItem>
        <DropdownItem :to="{ name: 'projetos'}">
          <div class="flex">
            Deletar
          </div>
        </DropdownItem>
      </Dropdown>
    </div>
    <div class="flex flex-col items-center pb-10">
      <img class="mb-3 w-24 h-24 rounded-full shadow-lg" :src="props.image" alt="Bonnie image">
      <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ props.name }}</h3>
      <span class="text-sm text-gray-500 dark:text-gray-400">{{ props.category }}</span>
      <div class="flex mt-4 space-x-3 lg:mt-6">
        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase">
        {{ props.status }}
        </span>
      </div>
      <div class="flex mt-4 space-x-3 lg:mt-6">
        <a href="#"
           class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700
               rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
          Editar
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>

import Dropdown from "../Dropdown.vue";
import DropdownItem from "../DropdownItem.vue";

const props = defineProps({
  name: {
    type: String,
    default: undefined
  },

  image: {
    type: String,
    default: undefined
  },

  category: {
    type: String,
    default: undefined
  },

  status: {
    type: String,
    default: undefined
  }
});
</script>

<style scoped>

</style>