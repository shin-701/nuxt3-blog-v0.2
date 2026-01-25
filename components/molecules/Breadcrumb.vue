<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <nav class="flex items-center space-x-2 text-sm text-muted-foreground">
    <template v-for="(item, index) in items" :key="index">
      <span v-if="index > 0" class="text-muted-foreground">/</span>
      <NuxtLink
        v-if="item.to"
        :to="item.to"
        class="hover:text-foreground transition-colors"
      >
        {{ item.label }}
      </NuxtLink>
      <span v-else class="text-foreground font-medium">
        {{ item.label }}
      </span>
    </template>
  </nav>
</template>
