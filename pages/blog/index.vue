
<script setup lang="ts">
import { parseDate } from "~/utils/parseDate";

const { data } = await useAsyncData("blog-list", () =>
  queryCollection("blog").order("id", "DESC").all()
);

// const posts = [
//   {
//     id: 1,
//     title: "Bill Walsh leadership lessons",
//     slug: "bill-walsh-leadership-lessons",
//     excerpt:
//       "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
//     image: "https://placehold.co/384x240",
//     tags: [{ name: "Leadership" }, { name: "Management" }, { name: "Presentation" }],
//   },
//   {
//     id: 2,
//     title: "PM mental models",
//     slug: "pm-mental-models",
//     excerpt: "Mental models are simple expressions of complex processes or relationships.",
//     image: "https://placehold.co/384x240",
//     tags: [{ name: "Product" }, { name: "Research" }, { name: "Frameworks" }],
//   },
//   {
//     id: 3,
//     title: "What is Wireframing?",
//     slug: "what-is-wireframing",
//     excerpt: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
//     image: "https://placehold.co/384x240",
//     tags: [{ name: "Design" }, { name: "Research" }, { name: "Presentation" }],
//   },
//   {
//     id: 4,
//     title: "How collaboration makes us better designers",
//     slug: "how-collaboration-makes-us-better-designers",
//     excerpt: "Collaboration can make our teams stronger, and our individual designs better.",
//     image: "https://placehold.co/384x240",
//     tags: [{ name: "Design" }, { name: "Research" }, { name: "Presentation" }],
//   },
//   {
//     id: 5,
//     title: "Our top 10 Javascript frameworks to use",
//     slug: "our-top-10-javascript-frameworks",
//     excerpt:
//       "JavaScript frameworks make development easy with extensive features and functionalities.",
//     image: "https://placehold.co/384x240",
//     tags: [{ name: "Software Development" }, { name: "Tools" }, { name: "SaaS" }],
//   },
//   {
//     id: 6,
//     title: "Creating a better CX Community",
//     slug: "creating-better-cx-community",
//     excerpt: "Starting a community doesn't need to be complicated, but how do you get started?",
//     image: "https://placehold.co/384x240",
//     tags: [{ name: "Podcasts" }, { name: "Customer Success" }, { name: "Presentation" }],
//   },
// ];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="py-6 sm:py-8 md:py-10 bg-dark-950">
      <div class="container">
        <div class="border-t border-b border-white py-6 sm:py-8 md:py-10">
          <h1 class="text-white text-4xl sm:text-6xl md:text-8xl font-bold whitespace-nowrap">
            ARTICLES
          </h1>
        </div>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="py-6 sm:py-8 bg-dark-950">
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
              />
              <div class="pt-4 sm:pt-6 space-y-3">
                <div class="space-y-1.5">
                  <div class="text-primary-700 text-xs font-semibold">{{ parseDate(post.date) }}</div>
                  <div class="flex justify-between items-start">
                    <h3 class="text-white text-lg sm:text-xl font-semibold">{{ post.title }}</h3>
                    <button class="p-1">
                      <div class="w-5 h-5 border-2 border-white rounded"></div>
                    </button>
                  </div>
                  <p class="text-[#C0C5D0] text-sm line-clamp-2">{{ post.description }}</p>
                </div>
                <div v-if="post.tags" class="flex items-center gap-2 mt-0">
                  <Icon
                    name="heroicons:tag"
                    class="w-5 h-5 text-yellow-200"
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
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
