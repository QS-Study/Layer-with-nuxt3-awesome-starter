// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module'],
  extends: [
    '@nuxt-awesome/theme',
    [
      'github:QS-Study/Layer/layers/server-layer',
      { auth: process.env.GITHUB_TOKEN },
    ],
    [
      'github:QS-Study/Layer/layers/composables-layer',
      { auth: process.env.GITHUB_TOKEN },
    ],
  ],
});
