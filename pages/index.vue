<script setup lang="ts">
const { data } = await useAsyncData("index", () => queryCollection("docs").path("/").first());
</script>

<template>
  <Hero />
  <ContentRenderer
    v-if="data"
    :value="data"
  />
  <div v-else>
    <h1>Page not found</h1>
  </div>

</template>

<style scoped></style>
