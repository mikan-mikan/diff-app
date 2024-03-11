<template>
  <div :class="[ marginTop, marginBottom, marginLeft, marginRight ]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

type MarginSize = '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '30' | '35' | '40' | '45' | '50' | '55' | '60' | '65' | '70' | '75' | '80' | '85' | '90' | '95' | '100';

type Props = {
  mt?: MarginSize;
  mb?: MarginSize;
  ml?: MarginSize;
  mr?: MarginSize;
}

const props = defineProps<Props>();
const marginTop = props.mt === undefined ? '' : `mt-${props.mt}`;
const marginBottom = props.mb === undefined ? '' : `mb-${props.mb}`;
const marginLeft = props.ml === undefined ? '' : `ml-${props.ml}`;
const marginRight = props.mr === undefined ? '' : `mr-${props.mr}`;
</script>

<style scoped>
.mt-0 {
  margin-top: 0;
}
.mt-1 {
  margin-top: 0.1rem;
}
.mt-2 {
  margin-top: 0.2rem;
}
.mt-3 {
  margin-top: 0.3rem;
}
.mt-4 {
  margin-top: 0.4rem;
}
.mt-5 {
  margin-top: 0.5rem;
}
.mt-10 {
  margin-top: 1rem;
}
.mt-15 {
  margin-top: 1.5rem;
}
.mt-20 {
  margin-top: 2rem;
}
.mt-25 {
  margin-top: 2.5rem;
}
.mt-30 {
  margin-top: 3rem;
}
.mt-35 {
  margin-top: 3.5rem;
}
.mt-40 {
  margin-top: 4rem;
}
.mt-45 {
  margin-top: 4.5rem;
}
.mt-50 {
  margin-top: 5rem;
}
.mt-55 {
  margin-top: 5.5rem;
}
.mt-60 {
  margin-top: 6rem;
}
.mt-65 {
  margin-top: 6.5rem;
}
.mt-70 {
  margin-top: 7rem;
}
.mt-75 {
  margin-top: 7.5rem;
}
.mt-80 {
  margin-top: 8rem;
}
.mt-85 {
  margin-top: 8.5rem;
}
.mt-90 {
  margin-top: 9rem;
}
.mt-95 {
  margin-top: 9.5rem;
}
.mt-100 {
  margin-top: 10rem;
}
.mb-0 {
  margin-bottom: 0;
}
.mb-1 {
  margin-bottom: 0.1rem;
}
.mb-2 {
  margin-bottom: 0.2rem;
}
.mb-3 {
  margin-bottom: 0.3rem;
}
.mb-4 {
  margin-bottom: 0.4rem;
}
.mb-5 {
  margin-bottom: 0.5rem;
}
.mb-10 {
  margin-bottom: 1rem;
}
.mb-15 {
  margin-bottom: 1.5rem;
}
.mb-20 {
  margin-bottom: 2rem;
}
.mb-25 {
  margin-bottom: 2.5rem;
}
.mb-30 {
  margin-bottom: 3rem;
}
.mb-35 {
  margin-bottom: 3.5rem;
}
.mb-40 {
  margin-bottom: 4rem;
}
.mb-45 {
  margin-bottom: 4.5rem;
}
.mb-50 {
  margin-bottom: 5rem;
}
.mb-55 {
  margin-bottom: 5.5rem;
}
.mb-60 {
  margin-bottom: 6rem;
}
.mb-65 {
  margin-bottom: 6.5rem;
}
.mb-70 {
  margin-bottom: 7rem;
}
.mb-75 {
  margin-bottom: 7.5rem;
}
.mb-80 {
  margin-bottom: 8rem;
}
.mb-85 {
  margin-bottom: 8.5rem;
}
.mb-90 {
  margin-bottom: 9rem;
}
.mb-95 {
  margin-bottom: 9.5rem;
}
.mb-100 {
  margin-bottom: 10rem;
}
.ml-0 {
  margin-left: 0;
}
.ml-1 {
  margin-left: 0.1rem;
}
.ml-2 {
  margin-left: 0.2rem;
}
.ml-3 {
  margin-left: 0.3rem;
}
.ml-4 {
  margin-left: 0.4rem;
}
.ml-5 {
  margin-left: 0.5rem;
}
.ml-10 {
  margin-left: 1rem;
}
.ml-15 {
  margin-left: 1.5rem;
}
.ml-20 {
  margin-left: 2rem;
}
.ml-25 {
  margin-left: 2.5rem;
}
.ml-30 {
  margin-left: 3rem;
}
.ml-35 {
  margin-left: 3.5rem;
}
.ml-40 {
  margin-left: 4rem;
}
.ml-45 {
  margin-left: 4.5rem;
}
.ml-50 {
  margin-left: 5rem;
}
.ml-55 {
  margin-left: 5.5rem;
}
.ml-60 {
  margin-left: 6rem;
}
.ml-65 {
  margin-left: 6.5rem;
}
.ml-70 {
  margin-left: 7rem;
}
.ml-75 {
  margin-left: 7.5rem;
}
.ml-80 {
  margin-left: 8rem;
}
.ml-85 {
  margin-left: 8.5rem;
}
.ml-90 {
  margin-left: 9rem;
}
.ml-95 {
  margin-left: 9.5rem;
}
.ml-100 {
  margin-left: 10rem;
}
.mr-0 {
  margin-right: 0;
}
.mr-1 {
  margin-right: 0.1rem;
}
.mr-2 {
  margin-right: 0.2rem;
}
.mr-3 {
  margin-right: 0.3rem;
}
.mr-4 {
  margin-right: 0.4rem;
}
.mr-5 {
  margin-right: 0.5rem;
}
.mr-10 {
  margin-right: 1rem;
}
.mr-15 {
  margin-right: 1.5rem;
}
.mr-20 {
  margin-right: 2rem;
}
.mr-25 {
  margin-right: 2.5rem;
}
.mr-30 {
  margin-right: 3rem;
}
.mr-35 {
  margin-right: 3.5rem;
}
.mr-40 {
  margin-right: 4rem;
}
.mr-45 {
  margin-right: 4.5rem;
}
.mr-50 {
  margin-right: 5rem;
}
.mr-55 {
  margin-right: 5.5rem;
}
.mr-60 {
  margin-right: 6rem;
}
.mr-65 {
  margin-right: 6.5rem;
}
.mr-70 {
  margin-right: 7rem;
}
.mr-75 {
  margin-right: 7.5rem;
}
.mr-80 {
  margin-right: 8rem;
}
.mr-85 {
  margin-right: 8.5rem;
}
.mr-90 {
  margin-right: 9rem;
}
.mr-95 {
  margin-right: 9.5rem;
}
.mr-100 {
  margin-right: 10rem;
}
</style>
