<template>
  <div class="p-2 my-2 rounded-md border border-gray-200 border-l-4 border-l-indigo-500 cursor-pointer hover:shadow-md">
    <div class="flex justify-between p-1">
      <span class="text-cyan-600 font-bold">{{ props.title }}</span>
      <img :src="props.userImage" class="rounded-full mr-2">
    </div>
    <div class="d-block p-1">
      {{ props.text }}
    </div>
    <div class="flex justify-between p-1">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
        </svg>
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
        {{ props.date }}
      </span>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    default: undefined
  },

  userImage: {
    type: String,
    default: undefined
  },

  text: {
    type: String,
    default: undefined
  },

  date: {
    type: String,
    default: undefined
  }
});

</script>

<style scoped>

</style>