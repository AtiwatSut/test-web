import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: "https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm-browser.js" },
        { src: "https://cdn.jsdelivr.net/npm/vuetify@3.8/dist/vuetify.esm.js" }
      ]
    }
  },
  devtools: { enabled: false },
  build: {
    transpile: ['vuetify'],
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
  ],
   modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  app: {
    baseURL: '/test-web/',
  },
  nitro: {
    preset: 'static',
  },
})
