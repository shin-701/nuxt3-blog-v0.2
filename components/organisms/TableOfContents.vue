<script setup lang="ts">
interface TocLink {
  id: string
  text: string
  depth: number
}

defineProps<{
  links: TocLink[]
}>()

const activeId = ref('')

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    { rootMargin: '-100px 0px -66%' }
  )

  document.querySelectorAll('h2, h3, h4').forEach((heading) => {
    observer.observe(heading)
  })

  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <nav class="space-y-2">
    <p class="text-sm font-semibold text-foreground mb-4">目次</p>
    <ul class="space-y-1">
      <li
        v-for="link in links"
        :key="link.id"
        :class="[
          'text-sm',
          link.depth === 2 ? 'pl-0' : link.depth === 3 ? 'pl-4' : 'pl-8'
        ]"
      >
        <a
          :href="`#${link.id}`"
          :class="[
            'block py-1 transition-colors hover:text-foreground',
            activeId === link.id
              ? 'text-foreground font-medium border-l-2 border-primary pl-2'
              : 'text-muted-foreground'
          ]"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>
