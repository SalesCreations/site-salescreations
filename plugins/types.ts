/* eslint-disable camelcase */
export interface BlogPostCollectionItem {
  name: string
  created_at: string
  published_at: string
  id: number
  uuid: string
  content: {
    _uid: string
    image: string
    intro: string
    title: string
    longText: string
    component: string
    portuguese: boolean
    _editable: string
  }
  slug: string
  full_slug: string
  sort_by_date: any
  position: number
  tag_list: string[]
  is_startpage: false
  parent_id: number
  meta_data: any
  group_id: string
  first_published_at: any
  release_id: any
  lang: string
  path: any
  alternates: string[]
  default_full_slug: any
  translated_slugs: any
}
export interface BlogPost {
  name: string
  created_at: string
  published_at: string
  id: number
  uuid: string
  content: {
    _uid: string
    image: string
    intro: string
    title: string
    longText: string
    component: string
    portuguese: boolean
    _editable: string
  }
  slug: string
  full_slug: string
  sort_by_date: any
  position: number
  tag_list: string[]
  is_startpage: false
  parent_id: number
  meta_data: any
  group_id: string
  first_published_at: any
  release_id: any
  lang: string
  path: any
  alternates: string[]
  default_full_slug: any
  translated_slugs: any
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
  name: string
  created_at: string
  published_at: string
  id: number
  uuid: string
  content: {
    title: string
    _uid: string
    type: string
    year: number
    company: string
    team: string[]
    tools: string[]
    roles: string[]
    resume: string
    content: string
    component: string
    cover: {
      id: number
      alt: string
      name: string
      focus: null
      title: string
      filename: string
      copyright: string
      fieldtype: string
    }
    metaImage: {
      id: number
      alt: string
      name: string
      focus: any
      title: string
      filename: string
      copyright: string
      fieldtype: string
    }
    thumbnail: {
      id: number
      alt: string
      name: string
      focus: any
      title: string
      filename: string
      copyright: string
      fieldtype: string
    }
    _editable: string
  }
  slug: string
  full_slug: string
  sort_by_date: any
  position: number
  tag_list: string[]
  is_startpage: false
  parent_id: number
  meta_data: any
  group_id: string
  first_published_at: any
  release_id: any
  lang: string
  path: any
  alternates: string[]
  default_full_slug: any
  translated_slugs: any
}
