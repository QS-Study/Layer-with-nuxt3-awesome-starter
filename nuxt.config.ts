// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module'],
  extends: [
    '@nuxt-awesome/theme',
    'github:QS-Study/Layers/server-layer',
    'github:QS-Study/Layers/composables-layer',
  ],
});
