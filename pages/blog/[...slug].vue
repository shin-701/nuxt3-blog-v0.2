<script setup lang="ts">
import { parseDate } from "~/utils/parseDate";
const route = useRoute();
const { data } = await useAsyncData(route.path, () =>
  queryCollection("blog").path(route.path).first()
);

// const post = {
//   id: 1,
//   title: "Finibus Bonorum et Malorum",
//   slug: "finibus-bonorum-et-malorum",
//   author: "John doe",
//   date: "2024-05-20",
//   image: "https://placehold.co/973x380",
// };
</script>

<template>
  <div>
    <!-- Article Content -->
    <section class="py-6 sm:py-8 bg-dark-950">
      <div
        v-if="data"
        class="container"
      >
        <div class="grid grid-cols-1 gap-6 sm:gap-8">
          <div class="col-span-1">
            <img
              :src="data.image"
              :alt="data.title"
              class="w-full h-48 sm:h-72 md:h-[38rem] object-cover mb-8 sm:mb-12 md:mb-16"
            />

            <div class="max-w-3xl mx-auto">
              <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {{ data.title }}
              </h1>

              <div class="flex flex-row sm:items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                <Icon
                  name="mdi:file-document-edit-outline"
                  class="w-5 h-5 text-yellow-200"
                />
                <div class="text-sm sm:text-base text-[#C0C5D0]">投稿日：{{ parseDate(data.date) }}</div>
              </div>

              <div class="h-px bg-dark-800 mb-6 sm:mb-8"></div>

              <ContentRenderer
                :value="data"
                class="prose dark:prose-invert max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
