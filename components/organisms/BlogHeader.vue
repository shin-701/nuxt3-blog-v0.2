<script setup lang="ts">
import { Separator } from '~/components/ui/separator'
import MoleculesBreadcrumb from '~/components/molecules/Breadcrumb.vue'
import MoleculesTagList from '~/components/molecules/TagList.vue'

interface BreadcrumbItem {
  label: string
  to?: string
}

defineProps<{
  title: string
  description?: string
  breadcrumbItems?: BreadcrumbItem[]
  tags?: string[]
}>()
</script>

<template>
  <header class="border-b bg-background">
    <div class="container mx-auto px-4 sm:px-6 max-w-7xl py-4 sm:py-6">
      <MoleculesBreadcrumb v-if="breadcrumbItems" :items="breadcrumbItems" class="mb-2" />
      
      <h1 class="text-4xl sm:text-5xl font-bold text-foreground mt-2">
        {{ title }}
      </h1>
      
      <p v-if="description" class="text-muted-foreground mt-2">
        {{ description }}
      </p>
      
      <MoleculesTagList v-if="tags && tags.length > 0" :tags="tags" class="mt-4" />
    </div>
  </header>
</template>
