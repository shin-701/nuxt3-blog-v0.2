<script setup>
const isMenuOpen = ref(false);

// Close menu when route changes
watch(useRoute(), () => {
  isMenuOpen.value = false;
});

// Close menu when clicking outside
onMounted(() => {
  const handleClickOutside = (event) => {
    if (isMenuOpen.value && !event.target.closest("header")) {
      isMenuOpen.value = false;
    }
  };

  document.addEventListener("click", handleClickOutside);
  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
  });
});
</script>
<template>
  <header class="py-4 bg-dark-950">
    <div class="container py-2.5">
      <!-- Desktop & Tablet Navigation -->
      <div class="hidden sm:flex justify-between items-center">
        <NuxtLink
          to="/"
          class="text-white text-base sm:text-lg font-semibold"
          >HOME</NuxtLink
        >

        <nav class="flex items-center gap-6">
          <NuxtLink
            to="/blog"
            class="text-white text-base sm:text-lg"
            :class="$route.path === '/blog' ? 'font-bold border-b border-white' : 'font-normal'"
          >
            ARTICLES
          </NuxtLink>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white"
          >
            <Icon
              name="mdi:twitter"
              class="w-4 h-4 sm:w-5 sm:h-5"
            />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white"
          >
            <Icon
              name="mdi:github"
              class="w-4 h-4 sm:w-5 sm:h-5"
            />
          </a>
        </nav>
      </div>

      <!-- Mobile Navigation -->
      <div class="sm:hidden flex justify-between items-center">
        <NuxtLink
          to="/"
          class="text-white text-base font-semibold"
          >HOME</NuxtLink
        >

        <button
          class="text-white"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Icon
            :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
            class="w-6 h-6"
          />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMenuOpen"
        class="sm:hidden absolute left-0 right-0 top-[72px] bg-dark-950 border-t border-dark-800"
      >
        <nav class="container py-4 space-y-4">
          <NuxtLink
            to="/blog"
            class="block text-white text-base"
            :class="$route.path === '/blog' ? 'font-bold' : 'font-normal'"
            @click="isMenuOpen = false"
          >
            Blog
          </NuxtLink>

          <div class="flex flex-col gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white"
            >
              <Icon
                name="mdi:twitter"
                class="w-5 h-5"
              />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white"
            >
              <Icon
                name="mdi:github"
                class="w-5 h-5"
              />
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
