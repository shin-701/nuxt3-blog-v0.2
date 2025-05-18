<script setup lang="ts">
import { parseDate } from "~/utils/parseDate";

const { data } = await useAsyncData("blog", () =>
  queryCollection("blog").order("id", "DESC").all()
);
</script>

<template>
  <div class="">
    <div class="mx-auto max-w-screen-2xl">
      <div class="flex justify-start items-center gap-2">
        <h1 class="text-5xl font-bold first-letter:uppercase my-1">shin-701's Blog</h1>
      </div>
      <hr />
      <div
        v-if="data"
        class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8 mb-16"
      >
        <template
          v-for="article in data"
          :key="article.path"
        >
          <!-- article - start -->
          <div
            class="flex flex-col items-center overflow-hidden rounded-lg border border-gray-700 md:flex-row"
          >
            <div class="flex flex-col gap-2 p-4 lg:p-6">
              <div>
                <p class="flex space-x-1 my-1">
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
                  <span class="text-sm">{{ parseDate(article.date) }}</span>
                </p>
                <p
                  v-if="article.tag"
                  class="flex space-x-1 my-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <template
                    v-for="tag in article.tag"
                    :key="tag"
                  >
                    <span class="underline mr-1 text-sm">{{ tag }}</span>
                  </template>
                </p>
              </div>

              <h2 class="text-xl font-bold my-0">
                <a class="transition duration-100 no-underline">{{ article.title }}</a>
              </h2>

              <p class="text-sm text-gray-400">
                This is a section of some simple filler text, also known as placeholder text.
              </p>

              <div>
                <NuxtLink
                  :to="article.path"
                  class="font-semibold text-md text-indigo-500 transition duration-100 hover:text-yellow-600 active:text-indigo-700"
                  >記事を読む</NuxtLink
                >
              </div>
            </div>
          </div>
          <!-- article - end -->
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
