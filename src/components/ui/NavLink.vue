<template>
  <router-link :to="url" class="flex items-center gap-x-4 border-gray-200 hover:bg-gray-300 hover:text-gray-800 px-2.5 py-2.5 rounded text-white">
    <slot/>
  </router-link>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>