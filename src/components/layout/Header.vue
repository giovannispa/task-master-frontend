<template>
  <!-- Header -->
  <nav class="flex items-center justify-between h-12 bg-gray-100
              shadow-sm px-5 py-2.5 w-full z-10 border-b">
    <IconToggle @click="toggleSidebar" class="cursor-pointer"/>
    <Dropdown :title="{ src: '/user.png' }">
      <DropdownItem :to="{ name: 'projetos'}">
        <div class="flex">
          <IconLock/> Alterar senha
        </div>
      </DropdownItem>
      <DropdownItem>
        <div class="flex">
          <IconLogOut/> Sair
        </div>
      </DropdownItem>
    </Dropdown>
  </nav>
  <!-- End header -->
</template>

<script setup>
import IconToggle from "../icons/IconToggle.vue";
import Dropdown from "../Dropdown.vue";
import DropdownItem from "../DropdownItem.vue";
import IconLock from "../icons/IconLock.vue";
import IconLogOut from "../icons/IconLogOut.vue";
import { toggleSidebar } from "../../composables/sidebar";
</script>

<style scoped>

</style>