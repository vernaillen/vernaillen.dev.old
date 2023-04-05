import type { NavItem } from '~~/types'

export function useNavItems(): NavItem[] {
  return [
    { path: '/', title: 'Home' },
    { path: '/blog', title: 'Blog' },
    { path: '/career', title: 'Career' },
    { path: '/music', title: 'Music' },
    { path: '/about', title: 'About' },
    { path: '/contact', title: 'Contact' },
  ]
}
