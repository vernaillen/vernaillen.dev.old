export interface FeedMedia {
    url: string
    width: number
    height: number
    alt: string
}

export interface FeedPost {
    network: string
    account: string
    accountLink: string
    avatar: string
    handle: string
    createdAt: Date,
    permalink: string
    media: FeedMedia[]
    html: string
    repliesCount: number
    favouritesCount: number
    reblogsCount: number
    reblogged: boolean
    reblog: FeedPost
}
