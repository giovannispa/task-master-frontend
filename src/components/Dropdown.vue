<template>
<div ref="el" class="relative inline-block">
  <button @click.stop.prevent="setIsOpen(!isOpen);">
    <template v-if="typeof props.title === 'string'">
      {{ props.title }}
    </template>
    <template v-else>
      <img class="inline-block h-7 w-7 rounded-full ring-2 ring-white cursor-pointer" :src="props.title.src" alt="title">
    </template>
  </button>


  <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-50">
    <div class="py-1 rounded-md bg-white shadow-xs">
      <slot/>
    </div>
  </div>
</div>
</template>

<script setup>
import {useState} from "../composables/state";
import {ref, provide, onMounted} from "vue";

const [isOpen, setIsOpen] = useState(false);

const el = ref(null);

const props = defineProps({
  title: {
    type: Object,
    required: true
  },
});

onMounted(() => {
  document.addEventListener("click", clickOutListiner);
})

const closeDropdown = () => {
  setIsOpen(!isOpen);
}

const clickOutListiner = (event) => {
  if(!el.value.contains(event.target)) {
    closeDropdown();
  }
}

provide('closeDropdown', closeDropdown);

</script>

<style scoped>

</style>