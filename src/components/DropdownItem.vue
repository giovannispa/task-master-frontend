<template>
  <Component :is="is"
             :href="localHref"
             :to="props.to"
             @click="closeDropdown"
             class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer">
    <slot/>
  </Component>
</template>

<script setup>

import {computed, inject} from "vue";

const props = defineProps({
  href: {
    type: String,
    default: undefined
  },

  to: {
    type: Object,
    default: undefined
  }
});

const emit = defineEmits(['click'])

const localHref = computed(() => {
  if(typeof props.to !== 'undefined') {
    return undefined;
  }

  return props.href;
});

const is = computed(() => {
  if(typeof props.href !== 'undefined') {
    return 'a';
  }

  if(typeof props.to !== 'undefined') {
    return 'RouterLink';
  }

  return 'buttom';
});

const closeDropdown = inject('closeDropdown');

const onClick = (event) => {
  emit("click", event);
}

</script>

<style scoped>

</style>