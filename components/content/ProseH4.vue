<template>
  <h4
    :id="id"
    class="text-title-medium font-medium text-m3-on-surface mt-4 mb-2"
  >
    <slot />
  </h4>
</template>

<script setup lang="ts">
defineProps<{
  id?: string;
}>();
</script>
