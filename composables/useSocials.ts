import type { Social } from '~~/types/social'

export function useSocials (): Social[] {
  return [
    {
      name: 'GitHub',
      url: new URL('https://github.com/vernaillen/'),
      icon: 'mdi:github'
    },
    {
      name: 'LinkedIn',
      url: new URL('https://www.linkedin.com/in/woutervernaillen/'),
      icon: 'mdi:linkedin'
    },
    {
      name: 'Instagram',
      url: new URL('https://www.instagram.com/woutervernaillen/'),
      icon: 'mdi:instagram'
    },
    {
      name: 'Twitter',
      url: new URL('https://twitter.com/vernaillen'),
      icon: 'mdi:twitter'
    },
    {
      name: 'Mastodon',
      url: new URL('https://fosstodon.org/@vernaillen'),
      icon: 'mdi:mastodon'
    }
  ]
}
