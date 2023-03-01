<template>
  <div class="flex min-h-screen w-full font-sans bg-gray-300">
    <Sidebar/>
    <main class="flex min-h-screen flex-1 flex-col">
      <Header/>
      <div class="w-full">
        <div class="w-full min-h-screen">
          <router-view />
        </div>
      </div>
      <Footer/>
    </main>
  </div>
</template>

<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import Sidebar from "./components/layout/Sidebar.vue";

</script>

<style scoped>

</style>
