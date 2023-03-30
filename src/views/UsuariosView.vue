<template>
  <div class="container mx-auto">
    <div class="pt-4 pb-2 ml-2 md:ml-0">
      <a href="" class="flex w-40 mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg
    shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        <icon-plus/> Novo usuário
      </a>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-2 p-2 md:p-0">
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
          <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
          <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h3>
          <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
          <div class="flex mt-4 space-x-3 lg:mt-6">
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase">
            Ativo
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
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
          <icon-show-more/>
        </div>
        <div class="flex flex-col items-center pb-10">
          <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
          <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h3>
          <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
          <div class="flex mt-4 space-x-3 lg:mt-6">
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase">
            Ativo
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
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
          <icon-show-more/>
        </div>
        <div class="flex flex-col items-center pb-10">
          <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
          <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h3>
          <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
          <div class="flex mt-4 space-x-3 lg:mt-6">
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase">
            Ativo
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
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
          <icon-show-more/>
        </div>
        <div class="flex flex-col items-center pb-10">
          <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
          <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h3>
          <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
          <div class="flex mt-4 space-x-3 lg:mt-6">
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase">
            Ativo
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
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
          <icon-show-more/>
        </div>
        <div class="flex flex-col items-center pb-10">
          <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
          <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h3>
          <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
          <div class="flex mt-4 space-x-3 lg:mt-6">
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase">
            Ativo
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
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
          <icon-show-more/>
        </div>
        <div class="flex flex-col items-center pb-10">
          <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
          <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h3>
          <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
          <div class="flex mt-4 space-x-3 lg:mt-6">
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase">
            Ativo
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
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
          <icon-show-more/>
        </div>
        <div class="flex flex-col items-center pb-10">
          <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
          <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h3>
          <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
          <div class="flex mt-4 space-x-3 lg:mt-6">
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase">
            Ativo
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
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
          <icon-show-more/>
        </div>
        <div class="flex flex-col items-center pb-10">
          <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
          <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h3>
          <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
          <div class="flex mt-4 space-x-3 lg:mt-6">
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase">
            Ativo
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
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
          <icon-show-more/>
        </div>
        <div class="flex flex-col items-center pb-10">
          <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
          <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h3>
          <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
          <div class="flex mt-4 space-x-3 lg:mt-6">
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase">
            Ativo
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
    </div>
  </div>
</template>

<script setup>

import IconShowMore from "../components/icons/IconShowMore.vue";
import IconPlus from "../components/icons/IconPlus.vue";
import Dropdown from "../components/Dropdown.vue";
import DropdownItem from "../components/DropdownItem.vue";
</script>

<style scoped>

</style>