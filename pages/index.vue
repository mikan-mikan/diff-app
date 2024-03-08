<script>
import { diffChars } from 'diff';
import { ref } from 'vue';

export default {
  name: 'IndexView',
  setup() {
    const textA = ref('');
    const textB = ref('');
    const diffAResult = ref('');
    const diffBResult = ref('');

    const compareTexts = () => {
      const diffLeft = diffChars(textA.value, textB.value);
      const diffRight = diffChars(textB.value, textA.value);

      // console.log(diffLeft);

      const colorizeDiff = (part) => {
        const color = part.added ? 'green' : part.removed ? 'red' : 'white';
        if (part.added !== true) {
          result += `<span style="background-color:${color}">${part.value}</span>`;
        }
      };

      let result = '';
      diffLeft.forEach((part) => {
        colorizeDiff(part);
      });
      diffAResult.value = result;

      result = '';
      diffRight.forEach((part) => {
        colorizeDiff(part);
      });
      diffBResult.value = result;
    };

    return { textA, textB, compareTexts, diffAResult, diffBResult };
  },
};
</script>

<template>
  <div>
    <!-- <RouterLink to="/about">Aboutページへ</RouterLink> -->
    <div class="wrap">
      <h1 class="title">差分を表示させる</h1>

      <div class="container">
        <div class="item">
          <p>A</p>
          <textarea v-model="textA" class="textarea" placeholder="入力しましょう"></textarea>
        </div>
        <div class="item">
          <p>B</p>
          <textarea v-model="textB" class="textarea" placeholder="人カしましょう"></textarea>
        </div>
      </div>

      <div class="button-wrap">
        <button type="button" class="diff-button" @click="compareTexts">差分を表示</button>
      </div>

      <div class="container">
        <div class="item">
          <p>A</p>
          <div v-html="diffAResult"></div>
        </div>
        <div class="item">
          <p>B</p>
          <div v-html="diffBResult"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 2rem;
}
.wrap {
  margin: 0 auto;
  max-width: 120rem;
  width: 95%;
}
.button-wrap {
  margin-top: 1rem;
  text-align: right;
}
.diff-button {
  padding: 0.8rem 1.5rem;
  border-radius: 0.2rem;
  background-color: #008b8b;
  transition: background-color 0.1s ease-in-out;
  color: #fff;
}
.diff-button:hover {
  background-color: #006666;
  transition: background-color 0.1s ease-in-out;
}
.container {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
}
.item {
  width: 100%;
}
.textarea {
  padding: 1rem;
  width: 100%;
  height: 10rem;
  min-height: 30rem;
  resize: vertical;
}
.hr {
  margin-top: 1rem;
}
</style>
