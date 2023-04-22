<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>

import Default from "./components/layout/Default.vue";
import {useRouter} from "vue-router";
import {computed} from "vue";

const defaultLayout = "default";

const { currentRoute } = useRouter();

const layout = computed(
    () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
);
</script>

<style scoped>

</style>
