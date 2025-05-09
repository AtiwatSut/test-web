import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import vuetifyPlugin from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
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
    plugins: [vuetifyPlugin()],
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
