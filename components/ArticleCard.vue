<script setup lang="ts">
interface Article {
  _path: string;
  title: string;
  description: string;
  image?: string; // Optional image
  tags?: string[]; // Optional tags
  // Add other relevant properties like date if needed
}

defineProps<{
  article: Article;
}>();
</script>

<template>
  <NuxtLink
    :to="article._path"
    class="block bg-m3-surface-container rounded-card shadow-m3-1
           hover:shadow-m3-3 hover:-translate-y-1 
           transition-all duration-300 ease-out
           overflow-hidden group m3-state-layer"
  >
    <div v-if="article.image" class="w-full h-48 overflow-hidden relative rounded-xl">
      <img
        :src="article.image"
        :alt="article.title"
        class="w-full h-full object-cover
               group-hover:scale-105 transition-transform duration-300 ease-out"
      />
      <!-- Overlay gradient for better text readability if needed -->
      <div class="absolute inset-0 bg-gradient-to-t from-m3-surface-container/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div class="p-4">
      <div class="flex items-start justify-between gap-2 mb-1">
        <h3 class="text-title-medium text-m3-on-surface font-semibold flex-1">
          {{ article.title }}
        </h3>
        <Icon 
          name="material-symbols:arrow-forward-rounded" 
          class="w-5 h-5 text-m3-primary opacity-0 group-hover:opacity-100 
                 transform translate-x-0 group-hover:translate-x-1
                 transition-all duration-200"
        />
      </div>
      <p class="text-body-small text-m3-on-surface-variant line-clamp-2">
        {{ article.description }}
      </p>
      
      <!-- Tags -->
      <div v-if="article.tags && article.tags.length > 0" class="flex flex-wrap gap-2 mt-3">
        <span
          v-for="tag in article.tags.slice(0, 3)"
          :key="tag"
          class="inline-flex items-center px-3 py-1 rounded-full
                 bg-m3-secondary-container text-m3-on-secondary-container
                 text-label-small font-medium"
        >
          {{ tag }}
        </span>
        <span
          v-if="article.tags.length > 3"
          class="inline-flex items-center px-3 py-1 rounded-full
                 bg-m3-surface-container-highest text-m3-on-surface-variant
                 text-label-small"
        >
          +{{ article.tags.length - 3 }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
/* Scoped styles if needed, but Tailwind handles most of it */
</style>
