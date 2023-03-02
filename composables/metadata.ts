export const setMetaData = (pageTitle: string) => {
  useHead({
    meta: [
      {
        name: 'og:title',
        content: `${pageTitle} - Wouter Vernaillen: Freelance Full Stack Developer`,
      },
      {
        property: 'og:description',
        content: 'Java, Spring, Vue, Nuxt + DevOps',
      },
      {
        property: 'og:image',
        content: 'https://vernaillen.dev/vernaillendev-website.png',
      },
    ],
  })
  useSeoMeta({
    ogTitle: `${pageTitle} - Wouter Vernaillen: Freelance Full Developer`,
    description: 'Java, Spring, Vue, Nuxt + DevOps',
    ogDescription: 'Java, Spring, Vue, Nuxt + DevOps',
    ogImageUrl: 'https://vernaillen.dev/vernaillendev-website.png',
  })
}
