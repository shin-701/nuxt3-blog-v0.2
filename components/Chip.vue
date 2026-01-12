<template>
  <div
    :class="chipClasses"
    class="inline-flex items-center gap-1.5 px-4 py-2
           rounded-chip text-label-medium
           transition-all duration-200 ease-in-out
           cursor-pointer select-none"
    @click="handleClick"
  >
    <Icon v-if="icon" :name="icon" class="w-4 h-4" />
    <span>{{ label }}</span>
    <Icon 
      v-if="removable" 
      name="material-symbols:close-rounded" 
      class="w-4 h-4 ml-1 hover:bg-m3-on-surface/10 rounded-full"
      @click.stop="handleRemove"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  variant?: 'assist' | 'filter' | 'input' | 'suggestion';
  icon?: string;
  removable?: boolean;
  selected?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'assist',
  removable: false,
  selected: false,
});

const emit = defineEmits<{
  click: [];
  remove: [];
}>();

const chipClasses = computed(() => {
  const classes = [];
  
  if (props.selected) {
    classes.push(
      'bg-m3-secondary-container',
      'text-m3-on-secondary-container',
      'border border-m3-secondary-container'
    );
  } else {
    switch (props.variant) {
      case 'assist':
        classes.push(
          'bg-transparent',
          'text-m3-on-surface',
          'border border-m3-outline',
          'hover:bg-m3-on-surface/8'
        );
        break;
      case 'filter':
        classes.push(
          'bg-transparent',
          'text-m3-on-surface-variant',
          'border border-m3-outline',
          'hover:bg-m3-on-surface/8'
        );
        break;
      case 'input':
        classes.push(
          'bg-m3-surface-container-high',
          'text-m3-on-surface',
          'hover:bg-m3-surface-container-highest'
        );
        break;
      case 'suggestion':
        classes.push(
          'bg-m3-surface-container-low',
          'text-m3-on-surface',
          'border border-m3-outline',
          'hover:bg-m3-surface-container'
        );
        break;
    }
  }
  
  return classes.join(' ');
});

const handleClick = () => {
  emit('click');
};

const handleRemove = () => {
  emit('remove');
};
</script>
