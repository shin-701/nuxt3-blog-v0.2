<script setup lang="ts"></script>
<template>
  <div class="min-h-screen bg-m3-surface text-m3-on-surface">
    <!-- Navigation Rail (Desktop) -->
    <NavigationRail />
    
    <!-- Bottom Navigation (Mobile) -->
    <BottomNavigation />
    
    <!-- Main Content -->
    <main class="md:ml-20 pb-24 md:pb-6">
      <slot />
    </main>
  </div>
</template>

