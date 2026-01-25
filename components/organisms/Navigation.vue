<script setup lang="ts">
const route = useRoute()

const navItems = [
  { label: 'Home', to: '/', icon: 'material-symbols:home-outline-rounded' },
  { label: 'Blog', to: '/blog', icon: 'material-symbols:article-outline-rounded' },
]

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<template>
  <nav class="border-b bg-background">
    <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="text-xl font-bold text-foreground">
          shin-701
        </NuxtLink>
        
        <div class="hidden md:flex items-center space-x-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :class="[
              'px-4 py-2 rounded-md text-sm font-medium transition-colors',
              isActive(item.to)
                ? 'bg-secondary text-secondary-foreground'
                : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
            ]"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- Mobile nav -->
        <div class="md:hidden flex items-center space-x-2">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :class="[
              'p-2 rounded-md transition-colors',
              isActive(item.to)
                ? 'bg-secondary text-secondary-foreground'
                : 'text-muted-foreground hover:bg-secondary/50'
            ]"
          >
            <Icon :name="item.icon" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
