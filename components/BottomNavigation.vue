<script setup lang="ts">
const route = useRoute();
const isSocialOpen = ref(false);

const toggleSocial = () => {
  isSocialOpen.value = !isSocialOpen.value;
};

// Close social menu when route changes
watch(() => route.path, () => {
  isSocialOpen.value = false;
});
</script>

<template>
  <nav 
    class="md:hidden fixed bottom-0 left-0 right-0 h-20
           bg-m3-surface-container border-t border-m3-outline-variant
           flex items-center justify-around px-2 z-50"
  >
    <!-- Home -->
    <NuxtLink 
      to="/"
      class="flex flex-col items-center justify-center gap-1 px-4 py-2
             rounded-fab m3-state-layer transition-all duration-200
             min-w-[64px]"
      :class="{ 'bg-m3-secondary-container': route.path === '/' }"
    >
      <Icon 
        name="material-symbols:home-outline-rounded" 
        class="w-6 h-6"
        :class="route.path === '/' ? 'text-m3-on-secondary-container' : 'text-m3-on-surface-variant'"
      />
      <span 
        class="text-label-small"
        :class="route.path === '/' ? 'text-m3-on-secondary-container font-medium' : 'text-m3-on-surface-variant'"
      >
        Home
      </span>
    </NuxtLink>

    <!-- Blog -->
    <NuxtLink 
      to="/blog"
      class="flex flex-col items-center justify-center gap-1 px-4 py-2
             rounded-fab m3-state-layer transition-all duration-200
             min-w-[64px]"
      :class="{ 'bg-m3-secondary-container': route.path.startsWith('/blog') }"
    >
      <Icon 
        name="material-symbols:article-outline-rounded" 
        class="w-6 h-6"
        :class="route.path.startsWith('/blog') ? 'text-m3-on-secondary-container' : 'text-m3-on-surface-variant'"
      />
      <span 
        class="text-label-small"
        :class="route.path.startsWith('/blog') ? 'text-m3-on-secondary-container font-medium' : 'text-m3-on-surface-variant'"
      >
        Blog
      </span>
    </NuxtLink>

    <!-- Social Menu (Dropdown or Sheet) -->
    <button 
      @click="toggleSocial"
      class="flex flex-col items-center justify-center gap-1 px-4 py-2
             rounded-fab m3-state-layer transition-all duration-200
             min-w-[64px]"
      :class="{ 'bg-m3-secondary-container': isSocialOpen }"
    >
      <Icon 
        name="material-symbols:group-outline-rounded" 
        class="w-6 h-6"
        :class="isSocialOpen ? 'text-m3-on-secondary-container' : 'text-m3-on-surface-variant'"
      />
      <span 
        class="text-label-small"
        :class="isSocialOpen ? 'text-m3-on-secondary-container font-medium' : 'text-m3-on-surface-variant'"
      >
        Social
      </span>
    </button>

    <!-- Social Links Popup -->
    <Transition name="slide-up">
      <div 
        v-if="isSocialOpen"
        class="absolute bottom-24 right-4 bg-m3-surface-container-high
               rounded-card shadow-m3-3 p-4 flex flex-col gap-3"
      >
        <a 
          href="https://x.com/shinTasomaRu" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center gap-3 px-4 py-2 rounded-fab
                 m3-state-layer hover:bg-m3-surface-container-highest
                 transition-all duration-200"
          @click="isSocialOpen = false"
        >
          <Icon 
            name="mdi:twitter" 
            class="w-5 h-5 text-m3-on-surface"
          />
          <span class="text-body-medium text-m3-on-surface">Twitter</span>
        </a>

        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center gap-3 px-4 py-2 rounded-fab
                 m3-state-layer hover:bg-m3-surface-container-highest
                 transition-all duration-200"
          @click="isSocialOpen = false"
        >
          <Icon 
            name="mdi:github" 
            class="w-5 h-5 text-m3-on-surface"
          />
          <span class="text-body-medium text-m3-on-surface">GitHub</span>
        </a>
      </div>
    </Transition>
  </nav>

  <!-- Backdrop -->
  <Transition name="fade">
    <div 
      v-if="isSocialOpen"
      class="md:hidden fixed inset-0 bg-black/20 z-40"
      @click="isSocialOpen = false"
    />
  </Transition>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.2s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
