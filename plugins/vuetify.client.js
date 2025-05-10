import '@mdi/font/css/materialdesignicons.css' 
import colors from 'vuetify/lib/util/colors'
import { VTimePicker } from 'vuetify/labs/VTimePicker'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'

const setComponents = {
  ...components, 
  ...{ 
    VTimePicker
  }
}

export default defineNuxtPlugin(nuxtApp => {
   const vuetify = createVuetify({
    autoImport: false,
    customVariables: ['~/assets/scss/vuetify.scss'],
    components: setComponents,
    directives,
    icons: {
        defaultSet: 'mdi',
        sets: {
          mdi,
        },
    },
    locale: {
      locale: "th",
      fallback: "en",
    },
    theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              primary: "#B71C1C",
              indigo: "#3F51B5",
              // secondary: colors.grey.darken4, // #FFCDD2
              // colorText: "#000400de"
            }
          }
        },
      },
   })
   nuxtApp.vueApp.use(vuetify)
})