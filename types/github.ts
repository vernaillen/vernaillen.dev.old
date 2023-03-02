export interface GitHubData {
  url: string
  html_url: string
  comments_url: string
  commit: GitHubCommit
}

export interface GitHubCommit {
  url: string
  message: string
  author: GitHubAuthor
  committer: GitHubAuthor
}

export interface GitHubAuthor {
  name: string
  email: string
  date: Date
}
