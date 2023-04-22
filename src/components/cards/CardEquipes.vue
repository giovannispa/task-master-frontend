<template>
  <div class="max-w-sm p-2 mt-2 mx-4 md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="divide-y divide-solid">
      <div class="flex items-center">
        <div class="grow">
          <h5 class="font-bold">
            <a href="">{{ props.title }}</a>
          </h5>
        </div>
        <div class="shrink-0 text-slate-400">
          <Dropdown :title="{ type: 'icon', icon: 'IconShowMore' }">
            <DropdownItem :to="{ name: 'projetos'}">
              <div class="flex">
                Deletar
              </div>
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <span>Lider:</span>
      <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full ml-2">
    </div>
    <div class="flex flex-nowrap items-center mt-1">
      <span class="inline-block mr-1">Membros:</span>
      <div class="flex pl-10 -ml-10">
        <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full">
      </div>
      <div class="flex pl-8 -ml-10">
        <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full">
      </div>
      <div class="flex pl-8 -ml-10">
        <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full">
      </div>
      <div class="flex pl-8 -ml-10">
        <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full">
      </div>
    </div>
    <div class="flex items-center">
      <span class="mr-1">Projetos ativos:</span>
      <span>{{ props.projects }}</span>
    </div>
  </div>
</template>

<script setup>
import Dropdown from "../Dropdown.vue";
import DropdownItem from "../DropdownItem.vue";

const props = defineProps({
  title: {
    type: String,
    default: undefined
  },

  projects: {
    type: Number,
    default: undefined
  }
});
</script>

<style scoped>

</style>