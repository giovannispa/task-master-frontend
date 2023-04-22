<template>
  <div class="flex min-h-screen w-full font-sans bg-gray-300">
    <Sidebar/>
    <main class="flex min-h-screen flex-1 flex-col">
      <Header/>
      <div class="w-full">
        <div class="w-full min-h-screen">
          <slot/>
        </div>
      </div>
      <Footer/>
    </main>
  </div>
</template>

<script setup>

import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>

</style>