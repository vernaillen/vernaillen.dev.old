import { createRestAPIClient } from 'masto'
import { parseURL, withProtocol } from 'ufo'

export default defineLazyEventHandler(() => {
  const accts = useRuntimeConfig().social.networks.mastodon.identifiers
  let allPosts = [] as any[]
  accts.forEach(async (acct) => {
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

    const posts = await client.v1.accounts.$select(id).statuses.list(
      {
        excludeReplies: true,
        excludeReblogs: false,
        limit: 100
      }
    )
    const mappedPosts = posts
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
          html: p.content.length === 0 && p.reblog?.content ? p.reblog.content : p.content,
          reblogged: (p.content.length === 0 && p.reblog && p.reblog.content?.length > 0),
          reblogAccount: p.reblog?.account?.acct,
          reblogAccountLink: `https://elk.zone/${host}/@${p.reblog?.account.acct}`,
          reblogAvatar: p.reblog?.account?.avatar,
          reblogHandle: p.reblog?.account.displayName.replace(
            /:([a-z-]+):/g,
            (string, shortcode) => {
              const emoji = p.account.emojis.find(
                e => e.shortcode === shortcode
              )
              if (!emoji) { return string }
              return `<img src="${emoji.url}" style="height:1em" alt="${shortcode} emoji" />`
            }
          ),
          reblogPermalink: p.reblog?.url?.replace('https://', 'https://elk.zone/') ?? p.reblog?.uri,
          reblogReblogsCount: p.reblog?.reblogsCount,
          reblogFavouritesCount: p.reblog?.favouritesCount,
          reblogRepliesCount: p.reblog?.repliesCount,
          repliesCount: p.repliesCount,
          favouritesCount: p.favouritesCount,
          reblogsCount: p.reblogsCount
        }))
    allPosts = allPosts.concat(mappedPosts)
  })
  return defineEventHandler(() => {
    return Promise.all(
      allPosts.sort((post) => {
        return new Date(post.createdAt).getTime()
      }))
  })
})
