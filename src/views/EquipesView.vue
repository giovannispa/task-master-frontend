<template>
  <div class="container mx-auto">
    <div class="pt-4 pb-2 ml-2 md:ml-0">
      <a href="" class="flex w-40 mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg
    shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        <icon-plus/> Nova equipe
      </a>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
      <div class="max-w-sm p-2 mt-2 mx-4 md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="divide-y divide-solid">
          <div class="flex items-center">
            <div class="grow">
              <h5 class="font-bold">
                <a href="">Time 1</a>
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
          <span class="mr-1">Lider:</span>
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
          <span>10</span>
        </div>
      </div><div class="max-w-sm p-2 mt-2 mx-4 md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="divide-y divide-solid">
          <div class="flex items-center">
            <div class="grow">
              <h5 class="font-bold">
                <a href="">Time 1</a>
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
          <span class="mr-1">Lider:</span>
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
          <span>10</span>
        </div>
      </div><div class="max-w-sm p-2 mt-2 mx-4 md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="divide-y divide-solid">
          <div class="flex items-center">
            <div class="grow">
              <h5 class="font-bold">
                <a href="">Time 1</a>
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
          <span class="mr-1">Lider:</span>
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
          <span>10</span>
        </div>
      </div><div class="max-w-sm p-2 mt-2 mx-4 md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="divide-y divide-solid">
          <div class="flex items-center">
            <div class="grow">
              <h5 class="font-bold">
                <a href="">Time 1</a>
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
          <span class="mr-1">Lider:</span>
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
          <span>10</span>
        </div>
      </div><div class="max-w-sm p-2 mt-2 mx-4 md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="divide-y divide-solid">
          <div class="flex items-center">
            <div class="grow">
              <h5 class="font-bold">
                <a href="">Time 1</a>
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
          <span class="mr-1">Lider:</span>
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
          <span>10</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import IconPlus from "../components/icons/IconPlus.vue";
import Dropdown from "../components/Dropdown.vue";
import DropdownItem from "../components/DropdownItem.vue";
</script>

<style scoped>

</style>