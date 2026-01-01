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
    <section class="py-6 sm:py-8 md:py-10">
      <div class="container">
        <div class="border-t border-b border-gray-00 py-6 sm:py-8 md:py-10">
          <h1 class="ext-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold whitespace-nowrap">
            shin-701' Blog
          </h1>
        </div>
      </div>
    </section>

    <!-- Recent Posts -->
    <section class="py-6 sm:py-8">
      <div class="container">
        <ContentRenderer
          v-if="index"
          :value="index"
          class="prose dark:prose-invert max-w-none"
        />
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="py-6 sm:py-8">
      <div class="container">
        <div v-if="data" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <article
            v-for="post in data"
            :key="post.id"
            class="overflow-hidden"
          >
            <NuxtLink :to="post.path">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-48 sm:h-60 object-cover"
              >
              <div class="pt-4 sm:pt-6 space-y-3">
                <div class="space-y-1.5">
                  <div class="text-xs font-semibold">{{ parseDate(post.date) }}</div>
                  <div class="flex justify-between items-start">
                    <h3 class="text-lg sm:text-xl font-semibold">{{ post.title }}</h3>
                  </div>
                  <p class="text-sm line-clamp-2">{{ post.description }}</p>
                </div>
                <div v-if="post.tags" class="flex items-center gap-2 mt-0">
                  <Icon
                    name="heroicons:tag"
                    class="w-5 h-5 text-yellow-800"
                  />
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in post.tags"
                      :key="tag"
                      class="text-xs underline hover:text-primary-700 transition-colors"
                    >
                      #{{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>
    
  </div>
</template>
