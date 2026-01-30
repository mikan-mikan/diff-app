# 差分比較機能

[← ドキュメントトップへ戻る](./README.md)

---

## 📌 機能概要

テキスト差分比較はこのアプリケーションのコア機能です。2つのテキストを文字単位で比較し、差分をハイライト表示します。

---

## 🔍 仕組み

### 使用ライブラリ

差分計算には [diff](https://www.npmjs.com/package/diff) ライブラリの `diffChars` 関数を使用しています。

```typescript
import { diffChars } from 'diff';
```

### 差分計算の流れ

1. **双方向比較**: 左→右、右→左の両方向で差分を計算
2. **差分タイプの判定**: 各文字が「追加」「削除」「変更なし」かを判定
3. **HTML生成**: 差分に応じて背景色付きのHTMLを生成
4. **表示**: 結果をDOMに反映

---

## 📂 ソースコード

### ファイル構成

```
hooks/
└── useDiffHook.ts    # 差分比較のカスタムフック
```

### useDiffHook の構造

```typescript
export const useDiffHook = (): Props => {
  const textA = ref(''); // 左側テキスト
  const textB = ref(''); // 右側テキスト
  const diffAResult = ref(''); // 左側の差分結果（HTML）
  const diffBResult = ref(''); // 右側の差分結果（HTML）

  const compareTexts = () => {
    // 差分計算ロジック
  };

  return { textA, textB, diffAResult, diffBResult, compareTexts };
};
```

---

## 🎨 差分の色分け

| 状態                 | 色       | カラーコード  |
| -------------------- | -------- | ------------- |
| 左側で削除された文字 | 緑系     | `#92b3b5`     |
| 右側で削除された文字 | ピンク系 | `#c397a8`     |
| 変更なし             | 透明     | `transparent` |

---

## 🛡️ セキュリティ対策

### XSS対策

ユーザー入力をそのままHTMLに挿入するとXSS（クロスサイトスクリプティング）の危険があります。
本アプリケーションでは、1文字ずつ`<span>`タグでラップして出力することで対策しています。

```typescript
const addedResult = (text: string, colorName: string): string => {
  let createResult = '';
  for (let j = 0; j < text.length; j++) {
    if (text[j] === ' ') {
      createResult += '&nbsp;'; // 半角スペースをエンティティ化
    } else {
      createResult += `<span style="background-color:${colorName}">${text[j]}</span>`;
    }
  }
  return createResult;
};
```

### 改行の処理

改行コード（`\n`）は `<br>` タグに変換して表示します。

---

## 📝 使用例

### 入力例

**左側テキスト（Text A）:**

```
Hello World
```

**右側テキスト（Text B）:**

```
Hello Vue World
```

### 出力結果

- 左側: 「Hello World」がそのまま表示
- 右側: 「Hello 」の後に追加された「Vue 」がハイライト表示
