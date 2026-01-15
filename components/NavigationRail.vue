<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <nav
    class="hidden md:flex fixed left-0 top-0 h-screen w-20 bg-m3-surface-container flex-col items-center py-4 gap-2 z-50"
  >
    <!-- Logo / Home -->
    <NuxtLink
      to="/"
      class="flex flex-col items-center gap-1 py-3 px-2 rounded-full m3-state-layer hover:bg-m3-surface-container-high transition-all duration-200 min-w-[64px]"
      :class="{ 'bg-m3-secondary-container': route?.path === '/' }"
    >
      <Icon
        name="material-symbols:home-outline-rounded"
        class="w-8 h-8"
        :class="
          route?.path === '/'
            ? 'text-m3-on-secondary-container'
            : 'text-m3-on-surface-variant'
        "
      />
      <span
        class="text-label-small"
        :class="
          route?.path === '/'
            ? 'text-m3-on-secondary-container font-medium'
            : 'text-m3-on-surface-variant'
        "
      >
        Home
      </span>
    </NuxtLink>

    <!-- Navigation Items -->
    <div class="flex-1 flex flex-col gap-2">
      <NuxtLink
        to="/blog"
        class="flex flex-col items-center gap-1 py-3 px-2 rounded-full m3-state-layer hover:bg-m3-surface-container-high transition-all duration-200 min-w-[64px]"
        :class="{
          'bg-m3-secondary-container': route?.path?.startsWith('/blog'),
        }"
      >
        <Icon
          name="material-symbols:article-outline-rounded"
          class="w-8 h-8"
          :class="
            route?.path?.startsWith('/blog')
              ? 'text-m3-on-secondary-container'
              : 'text-m3-on-surface-variant'
          "
        />
        <span
          class="text-label-small"
          :class="
            route?.path?.startsWith('/blog')
              ? 'text-m3-on-secondary-container font-medium'
              : 'text-m3-on-surface-variant'
          "
        >
          Blog
        </span>
      </NuxtLink>
    </div>

    <!-- Social Links -->
    <div class="flex flex-col gap-2 mb-4">
      <a
        href="https://x.com/shinTasomaRu"
        target="_blank"
        rel="noopener noreferrer"
        class="w-12 h-12 rounded-full flex items-center justify-center m3-state-layer hover:bg-m3-surface-container-high transition-all duration-200"
      >
        <Icon name="mdi:twitter" class="w-8 h-8 text-m3-on-surface-variant" />
      </a>

      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        class="w-12 h-12 rounded-full flex items-center justify-center m3-state-layer hover:bg-m3-surface-container-high transition-all duration-200"
      >
        <Icon name="mdi:github" class="w-8 h-8 text-m3-on-surface-variant" />
      </a>
    </div>
  </nav>
</template>
