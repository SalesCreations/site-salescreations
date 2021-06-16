export interface BlogPostCollectionItem {
  title: string
  slug: string
  resume: string
  contents: any
  datetime: string
  portugueses: boolean
  imagePost: {
    title: string
    url: string
  }
}
export interface BlogPost {
  title: string
  slug: string
  resume: string
  contents: string
  datetime: string
  portugueses: boolean
  imagePost: {
    title: string
    url: string
  }
}

export interface timelineCollectionItem {
  title: string
  description: string
  datetime: string
  sys: {
    id: string
  }
}

export interface ProjectsCollectionItem {
  title: string
  slug: string
  resume: string
  type: string
  year: number
  thumbnail: {
    title: string
    url: string
  }
}

export interface Project {
  title: string
  slug: string
  cover: {
    title: string
    url: string
  }
  company: string
  team: string[]
  tools: string[]
  roles: string[]
  year: number
  content: any
  resume: string
}
