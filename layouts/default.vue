<script setup lang="ts"></script>
<template>
  <div
    class="prose dark:prose-invert max-w-none px-5
      sm:mx-auto sm:max-w-2xl sm:px-8 lg:px-0 antialiased md:max-w-6xl grid gap-12 mt-4 overflow-hidden md:overflow-visible"
  >
    <HeaderNav />
    <slot />
    <FooterNav />
  </div>
</template>

<style scoped></style>
