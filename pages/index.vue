<template>
  <div class="wrap">
    <div class="inner">
      <h1 class="title"><span>テキストの差分を表示します</span></h1>

      <Container :mt="'30'">
        <FlexBox :gap="'30'" :justify="'space-between'" >
          <div class="item -green">
            <textarea v-model="textA" class="textarea" placeholder="入力しましょう"></textarea>
          </div>
          <div class="item -pink">
            <textarea v-model="textB" class="textarea" placeholder="人カしましょう"></textarea>
          </div>
        </FlexBox>
      </Container>

      <Container :mt="'25'">
        <FlexBox :justify="'flex-end'">
          <DefaultButton :color="'rose'" :button-text="'差分を表示するボタン'" :on-click="compareTexts" />
        </FlexBox>
      </Container>

      <template v-if="diffAResult || diffBResult">
        <p class="result-title"><span>結果はこちら</span></p>
        <Container :mt="'30'">
          <FlexBox :gap="'30'" :justify="'space-between'" >
            <div class="item -green">
              <div class="item__result" v-html="diffAResult"></div>
            </div>
            <div class="item -pink">
              <div class="item__result" v-html="diffBResult"></div>
            </div>
          </FlexBox>
        </Container>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import Container from '~/components/parts/Container.vue';
import DefaultButton from '~/components/parts/DefaultButton.vue';
import FlexBox from '~/components/parts/FlexBox.vue';
import { useDiffHook } from '~/hooks/useDiffHook';

const { textA, textB, diffAResult, diffBResult, compareTexts } = useDiffHook();
</script>

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
</style>
