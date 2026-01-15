<template>
  <h2
    :id="id"
    class="text-headline-large font-medium text-m3-on-surface mt-8 mb-4"
  >
    <slot />
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  id?: string;
}>();
</script>
