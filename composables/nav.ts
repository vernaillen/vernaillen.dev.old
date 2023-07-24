import type { NavItem } from '~~/types'

export function useNavItems (): NavItem[] {
  return [
    { path: '/', title: 'Home' },
    { path: '/career', title: 'Career' },
    { path: '/blog', title: 'Blog' },
    { path: '/feed', title: 'Feed' },
    { path: '/about', title: 'About' },
    { path: '/contact', title: 'Contact' }
  ]
}
