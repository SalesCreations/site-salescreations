import axios from 'axios'

export const apiClient = axios.create({
  baseURL: `https://api.storyblok.com/v2/cdn/stories/`,
  whithCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    version: 'draft',
    resolve_links: 1,
    token: process.env.ACCESS_TOKEN_SB,
  },
})
