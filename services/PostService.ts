import { apiClient } from './common/http-storyblok'

export default {
  getPosts(payload: any) {
    return apiClient.get(`/?token=${process.env.tokenStoryblok}&sort_by=first_published_at:desc`, {
      params: {
        starts_with: payload.path.substr(1),
        version: payload.query._storyblok !== undefined || payload.isDev ? 'draft' : 'published',
      },
    })
  },
  getPostsRoutes(payload: any) {
    return apiClient.get(`/?token=${process.env.ACCESS_TOKEN_SB}`, {
      params: {
        starts_with: payload.path.substr(1),
        version: payload.isDev ? 'draft' : 'published',
      },
    })
  },
  getPost(payload: any) {
    return apiClient.get(`${payload.path}/?token=${process.env.tokenStoryblok}`, {
      params: {
        version: payload.query._storyblok !== undefined || payload.isDev ? 'draft' : 'published',
      },
    })
  },
}
