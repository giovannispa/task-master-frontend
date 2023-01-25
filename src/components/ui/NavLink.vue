<template>
  <router-link :to="url" class="inline-flex relative items-center w-full px-2.5 py-2.5 text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800">
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