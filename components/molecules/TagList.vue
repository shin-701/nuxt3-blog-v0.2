<script setup lang="ts">
import { Badge } from '~/components/ui/badge'

defineProps<{
  tags: string[]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Badge
      v-for="tag in tags"
      :key="tag"
      variant="secondary"
    >
      {{ tag }}
    </Badge>
  </div>
</template>
