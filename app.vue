<template>
  <div>
    <div>Welcome to Nuxt3</div>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <a :href="item.url" target="_blank" rel="noopener noreferrer">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { testApi } from "./api/api";
const {
    data,
    pending,
    refresh
} = await testApi({ feed: 'news', page: 1 });
</script>

<style scoped>
</style>
