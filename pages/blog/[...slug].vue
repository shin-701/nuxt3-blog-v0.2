<script setup lang="ts">
const route = useRoute();
const slug = Array.isArray(route.params.slug) 
  ? route.params.slug.join('/') 
  : route.params.slug as string;

// blogコレクションから記事を取得
const { data: post, error } = await useAsyncData(slug, () =>
  queryCollection("blog").path(`/blog/${slug}`).first()
);

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });
}

// 目次用の見出しを抽出
const tocLinks = computed(() => {
  if (!post.value?.body?.toc?.links) {
    console.log('TOC links not found in post.value.body.toc');
    console.log('post.value:', post.value);
    return [];
  }
  
  // Nuxt Contentのtoc機能を使用
  const flattenLinks = (links: any[]): any[] => {
    return links.flatMap((link) => [
      {
        id: link.id,
        text: link.text,
        depth: link.depth
      },
      ...(link.children ? flattenLinks(link.children) : [])
    ]);
  };
  
  const links = flattenLinks(post.value.body.toc.links);
  
  // "Footnotes"を除外
  const filteredLinks = links.filter(link => link.text !== 'Footnotes');
  
  console.log('Extracted TOC links:', filteredLinks);
  return filteredLinks;
});

useHead({
  title: post.value?.title || 'Blog Post',
  meta: [
    { name: 'description', content: post.value?.description || 'A blog post' }
  ]
});

// 画像ライトボックス用のstate
const lightboxImage = ref<{ src: string; alt: string } | null>(null);

// 画像クリックイベントを追加
onMounted(() => {
  const handleImageClick = (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' && target.closest('.prose')) {
      const img = target as HTMLImageElement;
      lightboxImage.value = {
        src: img.src,
        alt: img.alt || ''
      };
    }
  };
  
  document.addEventListener('click', handleImageClick);
  
  onUnmounted(() => {
    document.removeEventListener('click', handleImageClick);
  });
});
</script>

<template>
  <div v-if="post" class="min-h-screen bg-m3-surface">
    <!-- M3風のシンプルなヘッダー -->
    <header class="border-b border-m3-outline-variant bg-m3-surface py-4 sm:py-6">
      <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
        <!-- パンくずリスト -->
        <Breadcrumb
          :items="[
            { label: 'Home', to: '/' },
            { label: 'Blog', to: '/blog' },
            { label: post.title }
          ]"
        />
        
        <h1 class="text-headline-large sm:text-display-small font-medium text-m3-on-surface mt-2">
          {{ post.title }}
        </h1>
        <p v-if="post.description" class="text-body-medium text-m3-on-surface-variant mt-2">
          {{ post.description }}
        </p>

        <!-- Tags -->
        <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="inline-flex items-center px-3 py-1 rounded-full
                   bg-m3-secondary-container text-m3-on-secondary-container
                   text-label-small font-medium"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </header>

    <!-- M3公式サイト風レイアウト: コンテンツ（中央）、TOC（右端固定） -->
    <div class="relative">
      <div class="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
        <div class="flex gap-8 xl:gap-12 max-w-6xl mx-auto">
          <!-- 中央: メインコンテンツ -->
          <article class="flex-1 min-w-0">
            <ContentRenderer 
              :value="post" 
              class="prose prose-m3 max-w-none" 
            />
          </article>

          <!-- 右側: Table of Contents（画面右端に固定） -->
          <aside class="hidden lg:block w-[300px] flex-shrink-0">
            <div class="sticky top-24">
              <TableOfContents v-if="tocLinks.length > 0" :links="tocLinks" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container max-w-4xl mx-auto py-16 text-center">
    <p class="text-body-large text-m3-on-surface-variant">記事を読み込んでいます...</p>
  </div>

  <!-- Image Lightbox -->
  <ImageLightbox
    v-if="lightboxImage"
    :src="lightboxImage.src"
    :alt="lightboxImage.alt"
    @close="lightboxImage = null"
  />
</template>

<style>
/* グローバルスタイル: Markdown内の要素にIDを付与 */
.prose h2, .prose h3, .prose h4 {
  position: relative;
}

/* テーブルのレスポンシブ対応 */
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