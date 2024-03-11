<template>
  <button :class="['diff-button', buttonColor]" type="button" @click="onClick">
    {{ buttonText }}
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

type Props = {
  color: 'black' | 'green' | 'light-pink' | 'light-blue' | 'light-purple' | 'dark-pink' | 'rose' | 'default';
  buttonText: string;
  onClick: () => void;
};

const props = defineProps<Props>();

const buttonColor = computed(() => {
  switch (props.color) {
    case 'black':
      return '-black';
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
      return '';
  }
});
</script>

<style scoped>
.diff-button {
  padding: 1rem 2rem 0.8rem;
  border-radius: 0.5rem;
  background-color: var(--color-rose);
  border: 2px solid var(--color-black);
  transition: all 0.1s ease-in-out;
  color: var(--color-white);
  font-size: 1.6rem;
  font-weight: bold;
}
.diff-button:hover {
  background-color: var(--color-white);
  color: var(--color-rose);
}
.diff-button:active {
  transform: translateY(0.2rem);
}
@media (hover: hover) {
  .diff-button:hover {
    transition: all 0.1s ease-in-out;
  }
  .diff-button:active {
    transition: all 0.1s ease-in-out;
  }
}

/* color */
.-black {
  background-color: var(--color-black);
}
.-green {
  background-color: var(--color-green);
}
.-light-pink {
  background-color: var(--color-light-pink);
}
.-light-blue {
  background-color: var(--color-light-blue);
}
.-light-purple {
  background-color: var(--color-light-purple);
}
.-dark-pink {
  background-color: var(--color-dark-pink);
}
.-rose {
  background-color: var(--color-rose);
}
</style>
