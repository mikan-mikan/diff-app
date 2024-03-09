<script setup lang="ts">
import { type Change, diffChars } from 'diff';
import { ref } from 'vue';

// name: 'IndexView',

type Props = {
  textA: globalThis.Ref<string>;
  textB: globalThis.Ref<string>;
  diffAResult: globalThis.Ref<string>;
  diffBResult: globalThis.Ref<string>;
  compareTexts: () => void;
};

const textA = ref('');
const textB = ref('');
const diffAResult = ref('');
const diffBResult = ref('');

const compareTexts = (): Props => {
  const diffLeft = diffChars(textA.value, textB.value);
  const diffRight = diffChars(textB.value, textA.value);
  const colorRed = '#c397a8';
  const colorGreen = '#92b3b5';
  const colorWhite = 'transparent';

  const colorizeDiff = (part: Change, colorName: string): void => {
    if (part.added === true) {
      return;
    }

    const backgroundColor = part.removed ? colorName : colorWhite;
    const brCount = part.value.match(/\n/g);
    if (brCount) {
      const textArray = part.value.split(/(\n)/g);
      if (!textArray) {
        return;
      }
      for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] === '\n') {
          result += `<br>`;
        } else {
          // XSS対策
          for (let j = 0; j < textArray[i].length; j++) {
            // 半角スペースをHTMLエンティティに変換
            if (textArray[i][j] === ' ') {
              result += '&nbsp;';
            } else {
              result += `<span style="background-color:${backgroundColor}">${textArray[i][j]}</span>`;
            }
          }
        }
      }
    } else {
      // XSS対策
      for (let i = 0; i < part.value.length; i++) {
        // 半角スペースをHTMLエンティティに変換
        if (part.value[i] === ' ') {
          result += '&nbsp;';
        } else {
          result += `<span style="background-color:${backgroundColor}">${part.value[i]}</span>`;
        }
      }
    }
  };

  let result = '';
  diffLeft.forEach((part) => {
    colorizeDiff(part, colorGreen);
  });
  diffAResult.value = result;

  result = '';
  diffRight.forEach((part) => {
    colorizeDiff(part, colorRed);
  });
  diffBResult.value = result;

  return { textA, textB, diffAResult, diffBResult, compareTexts };
};
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
        <button type="button" class="diff-button" @click="compareTexts">差分を表示</button>
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
.wrap {
  min-height: 100dvh;
  min-height: 100vh;
}
.inner {
  margin: 3rem auto 4rem;
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
