<template>
  <div class="overflow-x-auto">
    <table class="min-w-full">
      <slot />
    </table>
  </div>
</template>

<style scoped>
table {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}

@media (max-width: 768px) {
  table {
    font-size: 0.875rem;
  }
}
</style>
