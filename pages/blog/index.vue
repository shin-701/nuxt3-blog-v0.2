<script setup lang="ts">
// ブログ記事一覧を取得
const { data } = await useAsyncData("blog-list", () =>
  queryCollection("blog").order("id", "DESC").all()
);

useHead({
  title: 'Blog - shin-701',
  meta: [
    { name: 'description', content: 'shin-701の技術ブログ記事一覧' }
  ]
});
</script>

<template>
  <div class="min-h-screen bg-m3-surface">
    <!-- ヘッダー -->
    <header class="border-b border-m3-outline-variant bg-m3-surface py-4 sm:py-6">
      <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
        <Breadcrumb
          :items="[
            { label: 'Home', to: '/' },
            { label: 'Blog' }
          ]"
        />
        
        <h1 class="text-headline-large sm:text-display-small font-medium text-m3-on-surface mt-2">
          記事一覧
        </h1>
        <p class="text-body-medium text-m3-on-surface-variant mt-2">
          日々の学びと気づきを綴る、エンジニアの備忘録。技術的な発見、ハマったこと、解決したこと、そして日常の雑記を自由に書いています。
        </p>
      </div>
    </header>

    <!-- 記事一覧 -->
    <section class="py-8 sm:py-12">
      <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div v-if="data && data.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
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
        <div v-else-if="data && data.length === 0" class="text-center py-16">
          <p class="text-body-large text-m3-on-surface-variant">
            記事がまだありません
          </p>
        </div>
        <div v-else class="text-center py-16">
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
