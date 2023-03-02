export const setMetaData = (pageTitle: string) => {
  const { t } = useI18n()
  useHead({
    meta: [
      {
        name: 'og:title',
        content: `${pageTitle} - Wouter Vernaillen: Freelance Full Stack Java, Vue & Nuxt Developer`,
      },
      {
        property: 'og:description',
        content: t('website.description'),
      },
      {
        property: 'og:image',
        content: 'https://vernaillen.dev/vernaillendev-website.png',
      },
    ],
  })
  useSeoMeta({
    ogTitle: `${pageTitle} - Wouter Vernaillen: Freelance Full Stack Java, Vue & Nuxt Developer`,
    description: () => t('website.description'),
    ogDescription: () => t('website.description'),
    ogImageUrl: 'https://vernaillen.dev/vernaillendev-website.png',
  })
}
