<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ID_INJECTION_KEY } from 'element-plus'
provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
})
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:start", () => {
  console.log("page:start");
});

nuxtApp.hook("page:finish", () => {
  console.log("page:finish");
});
</script>

<style scoped>
</style>
