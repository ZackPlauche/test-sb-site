// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@storyblok/nuxt',
  ],
  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  },
})
