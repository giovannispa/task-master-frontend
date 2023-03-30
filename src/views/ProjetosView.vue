<template>
  <div class="container mx-auto">
    <div class="pt-4 pb-2 ml-4 md:ml-0">
      <a href="" class="flex w-40 mt-4 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg
    shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        <icon-plus/> Novo projeto
      </a>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
      <div class="max-w-sm p-2 mt-2 mx-4 md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="divide-y divide-solid">
          <div class="flex items-center">
            <div class="grow">
              <h5 class="font-bold">
                <a href="">TaskMaster Front-end</a>
              </h5>
            </div>
            <div class="shrink-0 text-slate-400">
              <Dropdown :title="{ type: 'icon', icon: 'IconShowMore' }">
                <DropdownItem :to="{ name: 'projetos'}">
                  <div class="flex">
                    Salve
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div class="flex">
                    Salve 2
                  </div>
                </DropdownItem>
              </Dropdown>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 px-2 py-4 text-center">
          <div>
            <p>Status</p>
            <span class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-green-600 bg-green-200 last:mr-0 mr-1">
            Completo
            </span>
          </div>
          <div>
            <p>Deadline</p>
            <p>18 Sep, 2021</p>
          </div>
          <div>
            <p>Time</p>
            <a href="">Haha</a>
          </div>
        </div>
        <div class="mt-auto">
          <div class="flex">
            <div class="grow">
              <div>Tasks</div>
            </div>
            <div class="shrink-0">
              <div class="flex">
                <icon-list-check/>
                18/56
              </div>
            </div>
          </div>
          <div class="mt-1">
            <progressbar :percentage="45" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import IconListCheck from "../components/icons/IconListCheck.vue";
import Progressbar from "../components/ui/Progressbar.vue";
import Dropdown from "../components/Dropdown.vue";
import DropdownItem from "../components/DropdownItem.vue";
import IconPlus from "../components/icons/IconPlus.vue";
</script>

<style scoped>

</style>