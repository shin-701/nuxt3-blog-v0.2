<script setup lang="ts">
// const { posts } = usePosts();

const { data:index } = await useAsyncData("index", () => queryCollection("docs").path("/").first());

const { data:posts } = await useAsyncData("blog-top", () =>
  queryCollection("blog").order("date", "DESC")
  .limit(3)
  .all()
);
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="py-6 sm:py-8 md:py-10 bg-dark-950">
      <div class="container">
        <div class="border-t border-b border-white py-6 sm:py-8 md:py-10">
          <h1 class="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold whitespace-nowrap">
            shin-701' Blog
          </h1>
        </div>
      </div>
    </section>

    <!-- Recent Posts -->
    <section class="py-6 sm:py-8 bg-dark-950">
      <div class="container">
        <ContentRenderer
          v-if="index"
          :value="index"
          class="prose dark:prose-invert max-w-none"
        />
      </div>
    </section>

    <!-- Recent Posts -->
    <section class="py-6 sm:py-8 bg-dark-950">
      <div v-if="posts" class="container">
        <h2 class="text-white text-3xl md:text-4xl font-semibold mb-6 sm:mb-10">Recent blog posts</h2>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          <!-- Featured Post -->
          <div class="lg:col-span-6">
            <NuxtLink
              :to="posts[0].path"
              class="flex flex-col gap-6 sm:gap-8"
            >
              <img
                :src="posts[0].image"
                :alt="posts[0].title"
                class="w-full h-48 sm:h-64 object-cover"
              >
              <div class="space-y-4 sm:space-y-6">
                <div class="space-y-2 sm:space-y-3">
                  <div class="text-primary-700 text-xs font-semibold">
                    {{ parseDate(posts[0].date) }}
                  </div>
                  <div class="flex justify-between items-start">
                    <h3 class="text-white text-lg sm:text-xl font-semibold">
                      {{ posts[0].title }}
                    </h3>
                  </div>
                  <p class="text-[#C0C5D0] text-sm line-clamp-3">{{ posts[0].description }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <Icon
                    name="heroicons:tag"
                    class="w-4 h-4 text-primary-700"
                  />
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in posts[0].tags"
                      :key="tag"
                      class="text-white text-xs underline hover:text-primary-700 transition-colors"
                    >
                      #{{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Side Posts -->
          <div class="lg:col-span-6 space-y-6 sm:space-y-8">
            <NuxtLink
              v-for="post in posts.slice(1)"
              :key="post.id"
              :to="post.path"
              class="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full sm:w-80 h-48 object-cover"
              />
              <div class="flex-1 space-y-4 sm:space-y-6">
                <div class="space-y-2 sm:space-y-3">
                  <div class="text-primary-700 text-xs font-semibold">
                    {{ parseDate(post.date) }}
                  </div>
                  <h3 class="text-white text-base font-semibold">{{ post.title }}</h3>
                  <p class="text-[#C0C5D0] text-sm line-clamp-2">{{ post.description }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <Icon
                    name="heroicons:tag"
                    class="w-4 h-4 text-primary-700"
                  />
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in post.tags"
                      :key="tag"
                      class="text-white text-xs underline hover:text-primary-700 transition-colors"
                    >
                      #{{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
