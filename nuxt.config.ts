// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      title: "Aura LifeStyle",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.svg" }],

      meta: [
        {
          name: "description",
          content:
            "Aura LifeStyle - AI interaction workspace OS",
        },
        {
          name: "keywords",
          content:
             "Aura AI, Aura Lifestyle, AI, AI interaction workspace OS, AI Tool,  TheAlphaOnes, Vishnu Gupta, TheNormVg",
        },
        { name: "author", content: "Vishnu Gupta (TheNormVg), TheAlphaOnes" },
        { name: "robots", content: "index, follow" },

        // Open Graph (OG)
        {
          property: "og:title",
          content: "Aura LifeStyle",
        },
        {
          property: "og:description",
          content:
            "Aura LifeStyle - AI interaction workspace OS",
        },
        {
          property: "og:image",
          content: "https://cassette.thealphaones.com/og-img.png",
        },
        { property: "og:url", content: "https://cassette.thealphaones.com" },
        { property: "og:type", content: "website" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Aura LifeStyle",
        },
        {
          name: "twitter:description",
          content:
            "Aura LifeStyle - AI interaction workspace OS",
        },
        {
          name: "twitter:image",
          content: "https://cassette.thealphaones.com/og-img.png",
        },
        { name: "twitter:site", content: "@TheNormVg" },
      ],
    },
  },

})
