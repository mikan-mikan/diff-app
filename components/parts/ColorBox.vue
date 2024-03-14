<template>
  <div :class="[ 'color-box', bgColor, shadow ]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed,defineProps } from 'vue';

type Props = {
  color?: 'green' | 'light-pink' | 'light-blue' | 'light-purple' | 'dark-pink' | 'rose' | 'default';
  shadow?: boolean;
}

const props = defineProps<Props>();
const bgColor = computed(() => {
  switch (props.color) {
    case 'green':
      return '-green';
    case 'light-pink':
      return '-light-pink';
    case 'light-blue':
      return '-light-blue';
    case 'light-purple':
      return '-light-purple';
    case 'dark-pink':
      return '-dark-pink';
    case 'rose':
      return '-rose';
    default:
      return '-green';
  }
});
const shadow = computed(() => {
  return props.shadow ? '-shadow' : '';
});

</script>

<style scoped>
.color-box {
  border-radius: 1rem;
  border: 2px solid var(--color-black);
  padding: 1rem;
}
.color-box.shadow {
  box-shadow: 0 4px 4px 0 rgba(51, 51, 51, 0.25);
}
.color-box.-green {
  background-color: var(--color-green);
}
.color-box.-light-pink {
  background-color: var(--color-light-pink);
}
.color-box.-light-blue {
  background-color: var(--color-light-blue);
}
.color-box.-light-purple {
  background-color: var(--color-light-purple);
}
.color-box.-dark-pink {
  background-color: var(--color-dark-pink);
}
.color-box.-rose {
  background-color: var(--color-rose);
}

</style>
