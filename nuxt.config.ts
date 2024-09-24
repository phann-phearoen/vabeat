// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["vuetify-nuxt-module", "@nuxtjs/sitemap"],
  site: {
    url: import.meta.env.VITE_SITE_URL,
  }
});
