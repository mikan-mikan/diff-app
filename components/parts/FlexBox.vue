<template>
  <div :class="['flex-box', justify, align, direction, gap]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

type Props = {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6'| '7' | '8' | '9' | '10' | '11'| '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' ;
};
const props = defineProps<Props>();
const justify = props.justify === undefined ? '' : `justify-${props.justify}`;
const align = props.align === undefined ? '' : `align-${props.align}`;
const direction = props.direction === undefined ? '' : `direction-${props.direction}`;
const gap = props.gap === undefined ? '' : `gap-${props.gap}`;
</script>

<style scoped>
.flex-box {
  display: flex;
}
.justify-flex-start {
  justify-content: flex-start;
}
.justify-center {
  justify-content: center;
}
.justify-flex-end {
  justify-content: flex-end;
}
.justify-space-between {
  justify-content: space-between;
}
.justify-space-around {
  justify-content: space-around;
}
.justify-space-evenly {
  justify-content: space-evenly;
}
.align-flex-start {
  align-items: flex-start;
}
.align-center {
  align-items: center;
}
.align-flex-end {
  align-items: flex-end;
}
.align-stretch {
  align-items: stretch;
}
.align-baseline {
  align-items: baseline;
}
.direction-row {
  flex-direction: row;
}
.direction-row-reverse {
  flex-direction: row-reverse;
}
.direction-column {
  flex-direction: column;
}
.direction-column-reverse {
  flex-direction: column-reverse;
}
.gap-0 {
  gap: 0;
}
.gap-1 {
  gap: 0.1rem;
}
.gap-2 {
  gap: 0.2rem;
}
.gap-3 {
  gap: 0.3rem;
}
.gap-4 {
  gap: 0.4rem;
}
.gap-5 {
  gap: 0.5rem;
}
.gap-6 {
  gap: 0.6rem;
}
.gap-7 {
  gap: 0.7rem;
}
.gap-8 {
  gap: 0.8rem;
}
.gap-9 {
  gap: 0.9rem;
}
.gap-10 {
  gap: 1rem;
}
.gap-11 {
  gap: 1.1rem;
}
.gap-12 {
  gap: 1.2rem;
}
.gap-13 {
  gap: 1.3rem;
}
.gap-14 {
  gap: 1.4rem;
}
.gap-15 {
  gap: 1.5rem;
}
.gap-16 {
  gap: 1.6rem;
}
.gap-17 {
  gap: 1.7rem;
}
.gap-18 {
  gap: 1.8rem;
}
.gap-19 {
  gap: 1.9rem;
}
.gap-20 {
  gap: 2rem;
}
.gap-21 {
  gap: 2.1rem;
}
.gap-22 {
  gap: 2.2rem;
}
.gap-23 {
  gap: 2.3rem;
}
.gap-24 {
  gap: 2.4rem;
}
.gap-25 {
  gap: 2.5rem;
}
.gap-26 {
  gap: 2.6rem;
}
.gap-27 {
  gap: 2.7rem;
}
.gap-28 {
  gap: 2.8rem;
}
.gap-29 {
  gap: 2.9rem;
}
.gap-30 {
  gap: 3rem;
}
</style>
