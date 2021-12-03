export interface BlogPostCollectionItem {
  name: string
  id: number
  lang: string
  uuid: string
  content: {
    _editable: any
    component: string
    _uid: string
    image: string
    intro: string
    longText: string
    portugueses: boolean
    title: string
  }
  // eslint-disable-next-line camelcase
  full_slug: string
  // eslint-disable-next-line camelcase
  created_at: string
  // eslint-disable-next-line camelcase
  published_at: string
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
  metaImage: {
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
