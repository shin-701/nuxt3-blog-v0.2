<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'

interface Article {
  _path: string
  title: string
  description: string
  image?: string
  tags?: string[]
}

defineProps<{
  article: Article
}>()
</script>

<template>
  <NuxtLink
    :to="article._path"
    class="block transition-all hover:scale-[1.02]"
  >
    <Card class="h-full overflow-hidden hover:shadow-lg transition-shadow">
      <div v-if="article.image" class="w-full h-48 overflow-hidden">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader class="pt-2 pb-1">
        <CardTitle class="line-clamp-2 text-lg">{{ article.title }}</CardTitle>
      </CardHeader>
      <CardContent class="py-1">
        <p class="text-sm text-muted-foreground line-clamp-2">
          {{ article.description }}
        </p>
      </CardContent>
      <CardFooter v-if="article.tags && article.tags.length > 0" class="flex flex-wrap gap-2 pt-1 pb-3">
        <Badge
          v-for="tag in article.tags.slice(0, 3)"
          :key="tag"
          variant="secondary"
        >
          {{ tag }}
        </Badge>
        <Badge v-if="article.tags.length > 3" variant="outline">
          +{{ article.tags.length - 3 }}
        </Badge>
      </CardFooter>
    </Card>
  </NuxtLink>
</template>
