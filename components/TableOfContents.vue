<script setup lang="ts">
interface TocLink {
  id: string;
  text: string;
  depth: number;
}

const props = defineProps<{
  links: TocLink[];
}>();

const activeId = ref('');

// スクロール時にアクティブなセクションを追跡
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id;
        }
      });
    },
    { rootMargin: '-100px 0px -80% 0px' }
  );

  // すべての見出しを監視
  props.links.forEach((link) => {
    const element = document.getElementById(link.id);
    if (element) {
      observer.observe(element);
    }
  });

  onUnmounted(() => {
    observer.disconnect();
  });
});

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<template>
  <nav class="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
    <h2 class="text-label-medium text-m3-on-surface font-medium mb-4">
      目次
    </h2>
    <ul class="space-y-2">
      <li
        v-for="link in links"
        :key="link.id"
        :class="[
          'border-l-2 transition-colors duration-200',
          activeId === link.id
            ? 'border-m3-primary'
            : 'border-m3-outline-variant'
        ]"
        :style="{ paddingLeft: `${(link.depth - 2) * 12 + 12}px` }"
      >
        <button
          @click="scrollToSection(link.id)"
          :class="[
            'text-left w-full py-0.5 px-3 rounded text-body-small transition-colors duration-200',
            activeId === link.id
              ? 'text-m3-primary font-medium bg-m3-primary-container/20'
              : 'text-m3-on-surface-variant hover:text-m3-on-surface hover:bg-m3-surface-container'
          ]"
        >
          {{ link.text }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* カスタムスクロールバー */
nav::-webkit-scrollbar {
  width: 6px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background: rgb(var(--m3-outline-variant));
  border-radius: 3px;
}

nav::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--m3-outline));
}
</style>
