// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2026-01-30',
  typescript: {
    strict: true, // TypeScriptのstrictモードを有効にする
  },
  devtools: { enabled: true }, // 開発ツールを有効にする（Vue Devtoolsなど）
  modules: ['@nuxt/eslint'], // Nuxt ESLintモジュール（ESLint 9 flat config対応）
  css: ['normalize.css', '@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/_variables.scss" as *;`, // Sass最新の@use構文
        },
      },
    },
  },
  app: {
    baseURL: process.env.BASE_URL || '/',
    head: {
      title: 'テキスト差分表示',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'テキストを比較して差分をわかりやすくします。' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `${process.env.BASE_URL || '/'}favicon.ico`,
        },
      ],
    },
  },
});
