<template>
  <h3
    :id="id"
    class="text-title-large font-medium text-m3-on-surface mt-6 mb-3"
  >
    <slot />
  </h3>
</template>

<script setup lang="ts">
defineProps<{
  id?: string;
}>();
</script>
