<script setup lang="ts">
const count = ref(0);
</script>

<template>
  <div class="button">
    <button @click="() => count++">{{ count }}</button>
  </div>
</template>

<style scoped>
.button {
  margin: 8px 0;
}
</style>
