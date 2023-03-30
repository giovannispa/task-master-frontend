<template>
  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div class="bg-green-600 h-2.5 rounded-full" :style="{'width': progress + '%'}"></div>
  </div>
</template>

<script setup>
import {onMounted, ref,} from "vue";

const props = defineProps({
  percentage: {
    type: Number,
    default: 0
  },
});

const progress = ref(0);

onMounted(() => {
  let interval = setInterval(() => {
    if (progress.value < props.percentage) {
      progress.value += 1;
    } else {
      clearInterval(interval);
    }
  }, 10);
});

</script>

<style scoped>

</style>