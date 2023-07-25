import type { Social } from '~~/types/social'

export function useSocials (): Social[] {
  return [
    {
      name: 'GitHub',
      url: 'https://github.com/vernaillen/',
      icon: 'i-mdi-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/woutervernaillen/',
      icon: 'i-mdi-linkedin'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/woutervernaillen/',
      icon: 'i-mdi-instagram'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/vernaillen',
      icon: 'i-custom-twitter'
    },
    {
      name: 'Mastodon',
      url: 'https://fosstodon.org/@vernaillen',
      icon: 'i-mdi-mastodon'
    }
  ]
}
