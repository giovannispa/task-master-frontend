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
          {{ props.status }}
        </span>
      </div>
      <div>
        <p>Data limite</p>
        <p>{{ props.dateLimit }}</p>
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
</template>

<script setup>

import Dropdown from "../Dropdown.vue";
import DropdownItem from "../DropdownItem.vue";
import IconListCheck from "../icons/IconListCheck.vue";
import Progressbar from "../ui/Progressbar.vue";

const props = defineProps({
  title: {
    type: String,
    default: undefined
  },

  status: {
    type: String,
    default: undefined
  },

  dateLimit: {
    type: String,
    default: undefined
  },
});
</script>

<style scoped>

</style>