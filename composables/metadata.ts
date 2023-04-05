export function setMetaData(pageTitle: string, documentDriven: boolean) {
  if (!documentDriven) {
    useHead({
      title: pageTitle,
    })
  }
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
    ogTitle: `${pageTitle} - Wouter Vernaillen: Freelance Full Stack Developer`,
    description: 'Java, Spring, Vue, Nuxt + DevOps',
    ogDescription: 'Java, Spring, Vue, Nuxt + DevOps',
    ogImageUrl: 'https://vernaillen.dev/vernaillendev-website.png',
  })
}
