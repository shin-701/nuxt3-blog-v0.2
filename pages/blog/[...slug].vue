<script setup lang="ts">
import { parseDate } from "~/utils/parseDate";
const route = useRoute();
const { data } = await useAsyncData(route.path, () =>
  queryCollection("blog").path(route.path).first()
);
</script>

<template>
  <main>
    <div>
      <NuxtLink
        class="text-lg"
        to="/blog"
        >←BACK</NuxtLink
      >

      <article
        v-if="data"
        class="min-w-full md:py-4 sm:max-w-none md:max-w-none"
      >
        <header class="mb-3 flex flex-col justify-center items-center gap-6">
          <div class="flex flex-col gap-2">
            <h1 class="text-center text-4xl md:text-6xl md:pb-2.5 mb-0 font-semibold">
              {{ data.title }}
            </h1>
          </div>
          <p class="flex space-x-1 my-0 justify-end min-w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-sm">投稿日：{{ parseDate(data.date) }}</span>
          </p>
        </header>
        <img
          src="https://img.game8.jp/10738888/7ad83b85aa5644556887ef0182074e9b.png/original"
          loading="eager"
          class="rounded-md w-full max-h-[300px] md:max-h-[500px] my-3 object-cover"
          alt="img of Astro Components"
          width="1000"
          height="500"
          decoding="async"
        />
        <hr />
        <div>
          <div class="grid grid-cols-1 md:grid-cols-[20%_auto] gap-10 mt-8">
            <!-- aside  -->
            <aside class="md:flex flex-col gap-8 hidden">
              <div
                class="sticky top-24 self-start hidden md:block transition-all duration-200 border border-gray-600 rounded-md p-2 min-w-full"
              >
                <nav class="max-w-xs">目次実装予定</nav>
              </div>
            </aside>
            <!-- post -->
            <article class="max-w-full w-full">
              <ContentRenderer
                v-if="data"
                :value="data"
              />
            </article>
          </div>
        </div>
      </article>
    </div>
  </main>
</template>

<style scoped></style>
