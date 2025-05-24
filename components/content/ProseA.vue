<script setup lang="ts">
const props = defineProps<{
  href: string
}>()

const isExternal = computed(() => {
  return props.href.startsWith('http')
})
</script>

<template>
  <a
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="text-primary-600 hover:text-primary-700 transition-colors duration-200 underline decoration-primary-400/30 hover:decoration-primary-400/50"
    :class="{ 'external-link': isExternal }"
  >
    <slot />
  </a>
</template>

<style scoped>
.external-link::after {
  content: "↗";
  margin-left: 0.125rem;
  display: inline-block;
}
</style>
