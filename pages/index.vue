<script setup lang="ts">
import { useDiffHook } from '~/hooks/useDiffHook';

const { textA, textB, diffAResult, diffBResult, compareTexts } = useDiffHook();
</script>

<template>
  <div class="wrap">
    <!-- <RouterLink to="/about">Aboutページへ</RouterLink> -->
    <div class="inner">
      <h1 class="title"><span>テキストの差分を表示します</span></h1>

      <div class="container">
        <div class="item -green">
          <textarea v-model="textA" class="textarea" placeholder="入力しましょう"></textarea>
        </div>
        <div class="item -pink">
          <textarea v-model="textB" class="textarea" placeholder="人カしましょう"></textarea>
        </div>
      </div>

      <div class="button-wrap">
        <button type="button" class="diff-button" @click="compareTexts">差分を表示するボタン</button>
      </div>

      <template v-if="diffAResult || diffBResult">
        <p class="result-title"><span>結果はこちら</span></p>
        <div class="container">
          <div class="item -green">
            <div class="item__result" v-html="diffAResult"></div>
          </div>
          <div class="item -pink">
            <div class="item__result" v-html="diffBResult"></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
}
.title span {
  background: linear-gradient(transparent 60%, var(--color-white) 60%);
}
.result-title {
  margin-top: 4rem;
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
}
.result-title span {
  background: linear-gradient(transparent 60%, var(--color-white) 60%);
}
.inner {
  padding: 3rem 0 4rem;
  margin: 0 auto 0;
  max-width: 200rem;
  width: 95%;
}
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}
.item {
  padding: 1rem;
  width: 49%;
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  border: 2px solid var(--color-black);
}
.item.-green {
  background-color: var(--color-green);
}
.item.-pink {
  background-color: var(--color-light-pink);
}
.item__result {
  width: 100%;
  height: 100%;
  padding: 1rem;
  opacity: 0.7;
  border-radius: 0.5rem;
  background-color: var(--color-white);
  word-break: break-all;
}
.textarea {
  padding: 1rem;
  width: 100%;
  height: 10rem;
  min-height: 30rem;
  resize: vertical;
  border-radius: 0.5rem;
  opacity: 0.7;
  border: none;
}

.button-wrap {
  margin-top: 2.5rem;
  text-align: right;
}
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
  transition: all 0.1s ease-in-out;
}
.diff-button:active {
  transform: translateY(0.2rem);
  transition: all 0.1s ease-in-out;
}
</style>
