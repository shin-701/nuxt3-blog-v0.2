<script setup lang="ts">
import OrganismsNavigation from '~/components/organisms/Navigation.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <OrganismsNavigation />
    
    <main>
      <slot />
    </main>
  </div>
</template>
