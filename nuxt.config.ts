// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  alias: {
    css: "/assets/css",
  },
  // runtimeConfig: {
  //   scriptSchoolApiSecret: '-----',
  //   public: {
  //     scriptSchoolApiBase: '/nomeAPI',
  //   }
  css: [
    "/assets/css/main.css",
    "assets/css/custom.css"
  ],
  compatibilityDate: "2024-07-08",
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap",
          rel: "stylesheet",
        },
      ]
    }
  }
});