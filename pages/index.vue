<script setup lang="ts">
// const { posts } = usePosts();

const { data:index } = await useAsyncData("index", () => queryCollection("docs").path("/").first());

const { data } = await useAsyncData("blog-list", () =>
  queryCollection("blog").order("id", "DESC").all()
);
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 sm:py-24 md:py-32">
      <div class="container mx-auto px-4 md:px-6 max-w-6xl">
        <div class="text-center">
          <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-m3-on-surface leading-tight mb-6">
            shin-701's<br>Tech Blog
          </h1>
          <p class="text-body-large sm:text-title-large text-m3-on-surface-variant max-w-2xl mx-auto">
            Daily notes and insights from a software engineer's journey
          </p>
        </div>
      </div>
    </section>

    <!-- Description -->
    <section class="py-6 sm:py-8 bg-m3-surface-container-high">
      <div class="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <ContentRenderer
          v-if="index"
          :value="index"
          class="prose prose-m3 dark:prose-invert max-w-none mx-auto
                 prose-headings:text-m3-on-surface prose-headings:font-bold
                 prose-p:text-m3-on-surface-variant prose-p:text-lg
                 prose-a:text-m3-primary hover:prose-a:text-m3-primary/80"
        />
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="py-6 sm:py-8 md:py-12">
      <div class="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 class="text-headline-large text-m3-on-surface font-medium mb-6">
          最新の記事
        </h2>
        <div v-if="data" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <ArticleCard
            v-for="post in data"
            :key="post.path"
            :article="{
              _path: post.path,
              title: post.title,
              description: post.description,
              image: post.image,
              tags: post.tags,
            }"
          />
        </div>
        <div v-else class="text-center py-12">
          <p class="text-body-large text-m3-on-surface-variant">
            記事を読み込んでいます...
          </p>
        </div>
      </div>
    </section>
    
  </div>
</template>

<style scoped>
/* Scoped styles if needed */
</style>
