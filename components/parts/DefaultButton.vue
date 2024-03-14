<template>
  <button :class="['diff-button', buttonColor, buttonSize]" type="button" @click="onClick">
    {{ buttonText }}
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

type Props = {
  color: 'black' | 'green' | 'light-pink' | 'light-blue' | 'light-purple' | 'dark-pink' | 'rose' | 'default';
  size?: 'small' | 'medium';
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

const buttonSize = computed(() => {
  switch (props.size) {
    case 'small':
      return '-small';
    case 'medium':
      return '-medium';
    default:
      return '-medium';
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
.diff-button:hover,
.diff-button.-black:hover,
.diff-button.-green:hover,
.diff-button.-light-pink:hover,
.diff-button.-light-blue:hover,
.diff-button.-light-purple:hover,
.diff-button.-dark-pink:hover,
.diff-button.-rose:hover {
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

/* size */
.diff-button.-small {
  padding: 0.5rem 1.6rem .4rem;
  font-size: 1.6rem;
  min-width: 15rem;
}
.diff-button.-medium {
  padding: 1rem 2rem 0.8rem;
  font-size: 1.6rem;
}

/* color */
.diff-button.-black {
  background-color: var(--color-black);
}
.diff-button.-green {
  background-color: var(--color-green);
}
.diff-button.-light-pink {
  background-color: var(--color-light-pink);
}
.diff-button.-light-blue {
  background-color: var(--color-light-blue);
}
.diff-button.-light-purple {
  background-color: var(--color-light-purple);
}
.diff-button.-dark-pink {
  background-color: var(--color-dark-pink);
}
.diff-button.-rose {
  background-color: var(--color-rose);
}
</style>
