<script setup lang="ts">
import MoleculesArticleCard from '~/components/molecules/ArticleCard.vue'

interface Article {
  _path: string
  title: string
  description: string
  image?: string
  tags?: string[]
}

defineProps<{
  articles: Article[]
}>()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <MoleculesArticleCard
      v-for="article in articles"
      :key="article._path"
      :article="article"
    />
  </div>
</template>
