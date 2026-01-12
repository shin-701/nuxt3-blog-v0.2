<script setup lang="ts">
const { data } = await useAsyncData("tag", () =>
    queryCollection("blog").where("tag", "IS NOT NULL").all(),
);
const tags = computed(() => {
  const arr = data.value
      ?.map((article) => article.tags)
      .flat()
      .filter((tag) => !!tag);
  return new Set(arr);
});

const route = useRoute();
const currentTag = computed(() => route.params.tag as string | undefined);
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <NuxtLink to="/blog">
      <Chip 
        label="All" 
        variant="filter"
        :selected="!currentTag"
      />
    </NuxtLink>
    <NuxtLink 
      v-for="tag in tags" 
      :key="tag" 
      :to="`/blog/tag/${tag}`"
    >
      <Chip 
        :label="tag" 
        variant="filter"
        :selected="currentTag === tag"
        icon="material-symbols:label-outline-rounded"
      />
    </NuxtLink>
  </div>
</template>

<style scoped>
/* Chipコンポーネントでスタイリングされるため不要 */
</style>
