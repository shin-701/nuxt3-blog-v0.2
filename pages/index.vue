<script setup lang="ts">
import OrganismsBlogList from '~/components/organisms/BlogList.vue'

const { data: index } = await useAsyncData("index", () => queryCollection("docs").path("/").first());

const { data } = await useAsyncData("blog-list", () =>
  queryCollection("blog").order("id", "DESC").all()
);

const articles = computed(() => {
  if (!data.value) return []
  return data.value.map(post => ({
    _path: post.path,
    title: post.title,
    description: post.description,
    image: post.image,
    tags: post.tags,
  }))
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 sm:py-24 md:py-32">
      <div class="container mx-auto px-4 md:px-6 max-w-6xl">
        <div class="text-center">
          <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground leading-tight mb-6">
            shin-701's<br>Tech Blog
          </h1>
          <p class="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Daily notes and insights from a software engineer's journey
          </p>
        </div>
      </div>
    </section>

    <!-- Description -->
    <section class="py-6 sm:py-8 bg-secondary/80">
      <div class="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <ContentRenderer
          v-if="index"
          :value="index"
          class="prose prose-slate dark:prose-invert max-w-none mx-auto"
        />
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="py-6 sm:py-8 md:py-12">
      <div class="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 class="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          最新の記事
        </h2>
        <OrganismsBlogList v-if="articles.length > 0" :articles="articles" />
        <div v-else class="text-center py-12">
          <p class="text-muted-foreground">
            記事を読み込んでいます...
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
