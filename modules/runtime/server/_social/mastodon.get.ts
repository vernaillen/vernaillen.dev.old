import { createRestAPIClient } from 'masto'
import { parseURL, withProtocol } from 'ufo'

export default defineLazyEventHandler(async () => {
  const acct = useRuntimeConfig().social.networks.mastodon.identifier

  const data = await $fetch<{ subject: string; aliases: string[] }>(
    '.well-known/webfinger',
    {
      baseURL: withProtocol(acct.split('@')[1], 'https://'),
      query: {
        resource: `acct:${acct}`
      }
    }
  )
  const { host, protocol } = parseURL(data.aliases[0])

  const client = createRestAPIClient({
    url: withProtocol(host!, protocol!)
  })
  const { id } = await client.v1.accounts.lookup({ acct })

  return defineEventHandler(async () => {
    const posts = await client.v1.accounts.$select(id).statuses.list(
      {
        excludeReplies: true,
        excludeReblogs: false,
        limit: 100
      }
    )
    return Promise.all(
      posts
        .map(p => (
          {
            network: 'mastodon' as const,
            account: acct,
            accountLink: `https://elk.zone/${host}/@${p.account.acct}`,
            avatar: p.account.avatar,
            handle: p.account.displayName.replace(
              /:([a-z-]+):/g,
              (string, shortcode) => {
                const emoji = p.account.emojis.find(
                  e => e.shortcode === shortcode
                )
                if (!emoji) { return string }
                return `<img src="${emoji.url}" style="height:1em" alt="${shortcode} emoji" />`
              }
            ),
            createdAt: p.createdAt,
            permalink: p.url?.replace('https://', 'https://elk.zone/') ?? p.uri,
            media: p.mediaAttachments.map(m => ({
              url: m.url,
              width: m.meta?.original?.width,
              height: m.meta?.original?.height,
              alt: m.description
            })),
            html: p.content,
            repliesCount: p.repliesCount,
            favouritesCount: p.favouritesCount,
            reblogsCount: p.reblogsCount,
            reblogged: p.content.length === 0 && p.reblog?.content,
            reblog: {
              account: p.reblog?.account?.acct,
              accountLink: `https://elk.zone/${host}/@${p.reblog?.account.acct}`,
              avatar: p.reblog?.account?.avatar,
              handle: p.reblog?.account.displayName.replace(
                /:([a-z-]+):/g,
                (string, shortcode) => {
                  const emoji = p.account.emojis.find(
                    e => e.shortcode === shortcode
                  )
                  if (!emoji) { return string }
                  return `<img src="${emoji.url}" style="height:1em" alt="${shortcode} emoji" />`
                }
              ),
              createdAt: p.reblog?.createdAt,
              permalink: p.reblog?.url?.replace('https://', 'https://elk.zone/') ?? p.reblog?.uri,
              media: p.reblog?.mediaAttachments.map(m => ({
                url: m.url,
                width: m.meta?.original?.width,
                height: m.meta?.original?.height,
                alt: m.description
              })),
              html: p.reblog?.content,
              favouritesCount: p.reblog?.favouritesCount,
              repliesCount: p.reblog?.repliesCount,
              reblogsCount: p.reblog?.reblogsCount
            }
          }))
    )
  })
})
