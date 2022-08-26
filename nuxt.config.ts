import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  head: {
    meta: [
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet',
      },
    ],
  },

  typescript: {
    strict: true,
    shim: false,
  }
})
