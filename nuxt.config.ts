import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  sourcemap: { server: true, client: true },
  app: {
    baseURL: process.env.BASE_PATH_APP,
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: 'favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;600&display=swap' }
      ]
    }
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@/assets/scss/style.global.scss'
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@sidebase/nuxt-auth',
    '@pinia/nuxt',
   (_options, nuxt) => {
     nuxt.hooks.hook('vite:extendConfig', (config) => {
       // @ts-expect-error
       config.plugins.push(
         vuetify({
           autoImport: true,
           styles: { configFile: new URL('./assets/scss/vuetify.scss', import.meta.url).pathname }
         })
       )
     })
   },
 ],
   vite: {
    esbuild: {
      drop: ["debugger"],
      pure: ["console.log", "console.error", "console.warn", "console.debug", "console.trace"],
    },
    define: {
      'process.env.DEBUG': false,
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  compatibilityDate: '2025-05-10',
})