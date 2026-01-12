<script setup lang="ts">
interface BreadcrumbItem {
  label: string;
  to?: string;
}

defineProps<{
  items: BreadcrumbItem[];
}>();
</script>

<template>
  <nav aria-label="Breadcrumb" class="mb-4">
    <ol class="flex items-center gap-2 text-body-small text-m3-on-surface-variant">
      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-2">
        <NuxtLink
          v-if="item.to"
          :to="item.to"
          class="hover:text-m3-primary transition-colors duration-200"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else class="text-m3-on-surface font-medium">
          {{ item.label }}
        </span>
        
        <Icon
          v-if="index < items.length - 1"
          name="material-symbols:chevron-right-rounded"
          class="w-4 h-4 text-m3-outline"
        />
      </li>
    </ol>
  </nav>
</template>

<style scoped>
/* Breadcrumb styles */
</style>
