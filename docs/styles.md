# スタイル・デザイン

[← ドキュメントトップへ戻る](./README.md)

---

## 📁 スタイルファイル構成

```
assets/
└── scss/
    ├── main.scss           # メインスタイル
    └── _variables.scss     # SCSS変数定義
```

---

## 🎨 CSS 変数（カスタムプロパティ）

アプリケーション全体で使用されるカラーパレット：

| 変数名               | 用途                       |
| -------------------- | -------------------------- |
| `--color-white`      | 白・背景色                 |
| `--color-black`      | 黒・テキスト・フッター背景 |
| `--color-green`      | 左側パネル背景             |
| `--color-light-pink` | 右側パネル背景             |
| `--color-rose`       | ボタン背景                 |

---

## 📐 レイアウトシステム

### ページ構造

```
┌──────────────────────────────────────┐
│              Header Area             │  (将来拡張用)
├──────────────────────────────────────┤
│                                      │
│            Main Content              │  flex: 1
│                                      │
├──────────────────────────────────────┤
│               Footer                 │  固定高さ
└──────────────────────────────────────┘
```

### Flexbox レイアウト

```css
.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh; /* モバイル対応 */
}

.inner {
  flex: 1; /* 残りの空間を埋める */
}
```

---

## 🧱 主要コンポーネントのスタイル

### コンテナ（2カラムレイアウト）

```css
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}

.item {
  width: 49%;
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid var(--color-black);
}
```

### テキストエリア

```css
.textarea {
  width: 100%;
  height: 10rem;
  min-height: 30rem;
  padding: 1rem;
  resize: vertical;
  border-radius: 0.5rem;
  border: none;
  opacity: 0.7;
}
```

### ボタン

```css
.diff-button {
  padding: 1rem 2rem 0.8rem;
  border-radius: 0.5rem;
  background-color: var(--color-rose);
  border: 2px solid var(--color-black);
  color: var(--color-white);
  font-size: 1.6rem;
  font-weight: bold;
  transition: all 0.1s ease-in-out;
}

.diff-button:hover {
  background-color: var(--color-white);
  color: var(--color-rose);
}

.diff-button:active {
  transform: translateY(0.2rem);
}
```

---

## ✨ デザイン特徴

### タイトルのハイライト効果

タイトルテキストに下半分がハイライトされる効果：

```css
.title span {
  background: linear-gradient(transparent 60%, var(--color-white) 60%);
}
```

### カラーテーマ

| エリア               | カラー    | 意味                      |
| -------------------- | --------- | ------------------------- |
| 左パネル             | 緑系      | 元のテキスト（Before）    |
| 右パネル             | ピンク系  | 変更後のテキスト（After） |
| 差分ハイライト（左） | `#92b3b5` | 削除された文字            |
| 差分ハイライト（右） | `#c397a8` | 削除された文字            |

---

## 📱 レスポンシブ対応

現在の実装：

- コンテナ幅: `95%`（画面幅に対して）
- 最大幅: `200rem`
- テキストエリア: `resize: vertical` で縦方向リサイズ可能

### 今後の改善点

- モバイル時の1カラムレイアウト対応
- ブレークポイントの追加

---

## 🔧 SCSS 設定（Nuxt）

`nuxt.config.ts` での SCSS 設定：

```typescript
vite: {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/_variables.scss" as *;`,
      },
    },
  },
},
```

この設定により、全てのVueコンポーネントで `_variables.scss` の変数が自動的に利用可能になります。

> **Note**: Sass の最新バージョンでは `@import` は非推奨となり、`@use` 構文が推奨されています。`as *` を指定することで、名前空間なしで変数を使用できます。

---

## 📦 使用CSSライブラリ

| ライブラリ    | バージョン | 用途                             |
| ------------- | ---------- | -------------------------------- |
| normalize.css | ^8.0.1     | ブラウザ間のスタイル差をリセット |
