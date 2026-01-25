<script setup lang="ts">
import OrganismsBlogHeader from '~/components/organisms/BlogHeader.vue'
import OrganismsTableOfContents from '~/components/organisms/TableOfContents.vue'

const route = useRoute();
const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join("/")
  : (route.params.slug as string);

const { data: post, error } = await useAsyncData(slug, () =>
  queryCollection("blog").path(`/blog/${slug}`).first()
);

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  });
}

const tocLinks = computed(() => {
  if (!post.value?.body?.toc?.links) return [];
  
  const flattenLinks = (links: any[]): any[] => {
    return links.flatMap((link) => [
      {
        id: link.id,
        text: link.text,
        depth: link.depth,
      },
      ...(link.children ? flattenLinks(link.children) : []),
    ]);
  };

  const links = flattenLinks(post.value.body.toc.links);
  return links.filter((link) => link.text !== "Footnotes");
});

useHead({
  title: post.value?.title || "Blog Post",
  meta: [
    { name: "description", content: post.value?.description || "A blog post" },
  ],
});
</script>

<template>
  <div v-if="post" class="min-h-screen bg-background">
    <OrganismsBlogHeader
      :title="post.title"
      :description="post.description"
      :tags="post.tags"
      :breadcrumb-items="[
        { label: 'Home', to: '/' },
        { label: 'Blog', to: '/blog' },
        { label: post.title },
      ]"
    />

    <div class="relative">
      <div class="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
        <div class="flex gap-8 xl:gap-12 max-w-6xl mx-auto">
          <article class="flex-1 min-w-0">
            <ContentRenderer
              :value="post"
              class="prose prose-slate dark:prose-invert max-w-none"
            />
          </article>

          <aside class="hidden lg:block w-[300px] flex-shrink-0">
            <div class="sticky top-24">
              <OrganismsTableOfContents v-if="tocLinks.length > 0" :links="tocLinks" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container max-w-4xl mx-auto py-16 text-center">
    <p class="text-muted-foreground">記事を読み込んでいます...</p>
  </div>
</template>

<style>
.prose h2, .prose h3, .prose h4 {
  position: relative;
}

.prose table {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .prose table {
    font-size: 0.875rem;
  }
}
</style>
