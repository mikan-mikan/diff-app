// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  typescript: {
    strict: true, // TypeScriptのstrictモードを有効にする
  },
  devtools: { enabled: true }, // 開発ツールを有効にする（Vue Devtoolsなど）
  modules: ['@nuxtjs/eslint-module'], // NuxtJSのESLintモジュールをプロジェクトに追加する,eslintrc.jsonの読み込み設定は不要
});
