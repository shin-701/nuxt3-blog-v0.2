<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt?: string;
}>();

const emit = defineEmits<{
  close: [];
}>();

// ESCキーで閉じる
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close');
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
  // スクロールを無効化
  document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
  // スクロールを復元
  document.body.style.overflow = '';
});
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="fade">
      <div
        class="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
        @click="emit('close')"
      >
        <!-- Image Container -->
        <div
          class="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
          @click.stop
        >
          <!-- Close Button -->
          <button
            @click="emit('close')"
            class="absolute top-4 right-4 w-12 h-12 rounded-full
                   bg-m3-surface-container-high text-m3-on-surface
                   flex items-center justify-center
                   hover:bg-m3-surface-container-highest
                   transition-all duration-200 z-10
                   shadow-m3-2"
          >
            <Icon name="material-symbols:close-rounded" class="w-6 h-6" />
          </button>

          <!-- Image -->
          <img
            :src="src"
            :alt="alt"
            class="max-w-full max-h-full object-contain rounded-xl shadow-m3-5"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
