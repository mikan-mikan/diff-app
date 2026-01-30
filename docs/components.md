# コンポーネント構成

[← ドキュメントトップへ戻る](./README.md)

---

## 📁 ディレクトリ構造

```
├── app.vue                     # ルートコンポーネント
├── components/
│   ├── organisms/
│   │   └── Footer.vue          # フッターコンポーネント
│   └── parts/                  # 小さなパーツ用（予約）
├── layouts/
│   └── default.vue             # デフォルトレイアウト
└── pages/
    ├── index.vue               # メインページ（差分比較）
    └── about.vue               # Aboutページ
```

---

## 🧩 各コンポーネントの説明

### app.vue

Nuxt アプリケーションのルートコンポーネント。全てのページはこのコンポーネント配下でレンダリングされます。

---

### layouts/default.vue

**役割**: 全ページ共通のレイアウトを定義

**構成**:

- Flexbox による全体レイアウト
- メインコンテンツエリア（`<slot>`）
- フッター（`<Footer />`）

```vue
<template>
  <div class="wrap">
    <div class="inner">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>
```

**スタイル特徴**:

- `min-height: 100vh` でフルハイト表示
- `min-height: 100dvh` でモバイル対応（ダイナミックビューポート）

---

### pages/index.vue

**役割**: アプリケーションのメインページ（差分比較機能）

**構成要素**:

| 要素                 | 説明                           |
| -------------------- | ------------------------------ |
| タイトル             | 「テキストの差分を表示します」 |
| テキストエリア（左） | 比較対象テキストA入力          |
| テキストエリア（右） | 比較対象テキストB入力          |
| 差分表示ボタン       | クリックで差分計算を実行       |
| 結果表示エリア       | 差分結果をハイライト表示       |

**使用フック**:

```typescript
const { textA, textB, diffAResult, diffBResult, compareTexts } = useDiffHook();
```

**スタイル**:

- 左側: 緑系（`--color-green`）
- 右側: ピンク系（`--color-light-pink`）

---

### pages/about.vue

**役割**: About ページ（現在は未使用のプレースホルダー）

現時点ではシンプルな説明ページとTOPへのリンクのみ。

---

### components/organisms/Footer.vue

**役割**: サイト共通フッター

**表示内容**:

- コピーライト表記（© 2024 テキスト差分表示）

**スタイル**:

- 背景: 黒（`--color-black`）
- テキスト: 白（`--color-white`）
- 右寄せ配置

---

## 🔄 コンポーネント間のデータフロー

```
app.vue
    │
    ▼
layouts/default.vue
    │
    ├── <slot> ─────────────► pages/index.vue
    │                              │
    │                              ├── useDiffHook()
    │                              │     ├── textA (入力)
    │                              │     ├── textB (入力)
    │                              │     ├── diffAResult (出力)
    │                              │     ├── diffBResult (出力)
    │                              │     └── compareTexts() (アクション)
    │                              │
    │                              └── 差分結果表示
    │
    └── <Footer /> ─────────► components/organisms/Footer.vue
```

---

## 📐 Atomic Design に基づく分類

このプロジェクトでは Atomic Design の考え方を採用しています：

| 分類      | ディレクトリ            | 例               |
| --------- | ----------------------- | ---------------- |
| Organisms | `components/organisms/` | Footer.vue       |
| Parts     | `components/parts/`     | （今後追加予定） |
