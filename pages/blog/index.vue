<script setup lang="ts">
import OrganismsBlogHeader from '~/components/organisms/BlogHeader.vue'
import OrganismsBlogList from '~/components/organisms/BlogList.vue'

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

useHead({
  title: 'Blog - shin-701',
  meta: [
    { name: 'description', content: 'shin-701の技術ブログ記事一覧' }
  ]
});
</script>

<template>
  <div class="min-h-screen bg-background">
    <OrganismsBlogHeader
      title="記事一覧"
      description="日々の学びと気づきを綴る、エンジニアの備忘録。技術的な発見、ハマったこと、解決したこと、そして日常の雑記を自由に書いています。"
      :breadcrumb-items="[
        { label: 'Home', to: '/' },
        { label: 'Blog' }
      ]"
    />

    <section class="py-8 sm:py-12">
      <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
        <OrganismsBlogList v-if="articles.length > 0" :articles="articles" />
        <div v-else-if="data && data.length === 0" class="text-center py-16">
          <p class="text-muted-foreground">
            記事がまだありません
          </p>
        </div>
        <div v-else class="text-center py-16">
          <p class="text-muted-foreground">
            記事を読み込んでいます...
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
