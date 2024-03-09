<template>
  <div class="wrap">
    <div class="inner">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script setup type="ts">
import Footer from '~/components/organisms/Footer.vue';
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
}
.inner {
  flex: 1;
}
</style>
