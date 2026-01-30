# テキスト差分表示 - ドキュメント

> **最終更新日**: 2026年1月30日

---

## 📖 ドキュメント一覧

| ドキュメント                          | 説明                                       |
| ------------------------------------- | ------------------------------------------ |
| [プロジェクト概要](./overview.md)     | アプリケーションの概要・目的・技術スタック |
| [セットアップガイド](./setup.md)      | 開発環境の構築手順                         |
| [差分比較機能](./diff-feature.md)     | テキスト差分比較のコア機能について         |
| [コンポーネント構成](./components.md) | Vue コンポーネントの構成と役割             |
| [スタイル・デザイン](./styles.md)     | SCSS・CSS 変数・デザインシステム           |
| [デプロイ](./deployment.md)           | GitHub Actions による自動デプロイ          |

---

## 🏗️ プロジェクト構造

```
diff-app/
├── app.vue                 # ルートコンポーネント
├── nuxt.config.ts          # Nuxt 設定
├── package.json            # 依存関係
├── assets/
│   └── scss/               # スタイルシート
├── components/
│   └── organisms/          # 大きなコンポーネント
├── hooks/
│   └── useDiffHook.ts      # 差分比較ロジック
├── layouts/
│   └── default.vue         # デフォルトレイアウト
├── pages/
│   ├── index.vue           # メインページ
│   └── about.vue           # Aboutページ
└── docs/                   # ドキュメント（このディレクトリ）
```

---

## 🔗 外部リンク

- **本番サイト**: [https://mikan-mikan.github.io/diff-app/](https://mikan-mikan.github.io/diff-app/)
- **リポジトリ**: GitHub

---

## 📝 更新履歴

| 日付       | 内容                                                                    |
| ---------- | ----------------------------------------------------------------------- |
| 2026-01-30 | Nuxt 4.3.0 にアップグレード                                            |
| 2026-01-30 | package.json更新、ESLint 9 flat config移行、Sass @use構文対応           |
| 2026-01-30 | バージョン情報を最新に更新（Nuxt 4, Vue Router 4.6, diff 8対応）         |
| 2026-01-30 | ドキュメント初版作成                                                    |
