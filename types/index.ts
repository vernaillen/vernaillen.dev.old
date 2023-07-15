export interface NavItem {
  path: string
  title: string
}

export interface BlogPost {
  _path: string
  title: string
  desc: string
  author: string
  date: string
  lang?: string
  duration?: string
  category?: string
  thumbnail?: string
  thumbnail_dark?: string
  thumbnail_light?: string
  thumbnail_class?: string
}

export interface CareerStep {
  client: string
  contract?: string
  date: string
  project: string
  projectUrl?: string
  role: string
  stack: string
  imageUrl?: string
}

export interface Project {
  title: string
  desc: string
  url: string
  githubUrl?: string
}
