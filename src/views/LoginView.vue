<template>
  <div class="flex justify-center items-center h-screen bg-[#607D8B]">
    <div class="w-96 p-6 bg-white shadow-lg rounded-md">
      <div class="flex justify-center items-center">
        <icon-users/>
        <h1 class="text-3xl text-center font-semibold">Login</h1>
      </div>
      <hr class="mt-3">
      <div class="mt-3">
        <label for="email" class="block text-base mb-2">E-mail:</label>
        <input type="text" id="email" name="email" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Informe o e-mail">
      </div>
      <div class="mt-3">
        <label for="password" class="block text-base mb-2">Senha:</label>
        <input type="password" id="password" name="password" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Informe a senha">
      </div>
      <div class="mt-2">
        <a href="#" class=" text-[#607D8B] font-semibold hover:underline">Esqueceu a senha?</a>
      </div>
      <div class="mt-4">
        <button type="button" class="border-2 bg-[#607D8B] border-[#607D8B] text-white py-1 w-full rounded-md hover:bg-transparent hover:text-[#607D8B] font-semibold">Entrar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconUsers from "../components/icons/IconUsers.vue";
</script>

<style scoped>

</style>