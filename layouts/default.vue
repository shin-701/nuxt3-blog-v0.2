<script setup lang="ts"></script>
<template>
  <div class="min-h-screen bg-stone-200 text-gray-600">
    <HeaderNav />
    <main class="pb-6 sm:mb-8 md:mb-10">
      <slot />
    </main>
    <FooterNav />
  </div>
</template>

