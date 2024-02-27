<script>
export default {
  name: 'IndexView',
};
</script>

<template>
  <div>
    <!-- <RouterLink to="/about">Aboutページへ</RouterLink> -->
    <div class="wrap">
      <h1 class="title">ここにタイトル</h1>

      <div class="container">
        <div class="item">
          <p>A</p>
          <textarea class="textarea" placeholder="入力しましょう"></textarea>
        </div>
        <div class="item">
          <p>B</p>
          <textarea class="textarea" placeholder="人カしましょう"></textarea>
        </div>
      </div>

      <div class="button-wrap">
        <button type="button" class="diff-button">差分を表示</button>
      </div>

      <div class="container">
        <div class="item">
          <p>A</p>
          <div>Aテキストを表示させる</div>
        </div>
        <div class="item">
          <p>B</p>
          <div>Bテキストを表示させる</div>
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
  max-width: 1200px;
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
  height: 100px;
  min-height: 300px;
  resize: vertical;
}
.hr {
  margin-top: 1rem;
}
</style>
