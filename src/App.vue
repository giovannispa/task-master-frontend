<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import Sidebar from "./components/layout/Sidebar.vue";
</script>

<template>
  <div class="h-screen flex">
    <Sidebar/>
    <div class="w-full h-full">
      <Header/>
      <div class="w-full h-full">
        <router-view />
      </div>
      <Footer/>
    </div>
  </div>
</template>

<style scoped>

</style>
