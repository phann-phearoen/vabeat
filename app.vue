<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    title: "VAbeat｜バビート株式会社",
    htmlAttrs: { lang: "ja" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "バビート株式会社のコーポレートサイトです。良い！と判断したプロダクトをどんどんカタチにすることを掲げています。",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "keywords",
        name: "keywords",
        content: "バビート株式会社 , VAbeat , バビート",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "VAbeat｜バビート株式会社",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "バビート株式会社のコーポレートサイトです。良い！と判断したプロダクトをどんどんカタチにすることを掲げています。",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://vabeat.co.jp",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: `/linkcard.jpg`,
      },
      
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  })
</script>
