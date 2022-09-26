import { apiClient } from './common/http-storyblok'

export default {
  getProjects(payload: any) {
    return apiClient.get(`/?token=${process.env.tokenStoryblok}`, {
      params: {
        starts_with: `[default]/${payload.path.substr(1)}`,
        version: payload.query._storyblok !== undefined || payload.isDev ? 'draft' : 'published',
      },
    })
  },
  getProjectsRoutes(payload: any) {
    return apiClient.get(`/?token=${process.env.ACCESS_TOKEN_SB}`, {
      params: {
        starts_with: payload.path.substr(1),
        version: payload.isDev ? 'draft' : 'published',
      },
    })
  },
  getProject(payload: any) {
    return apiClient.get(`${payload.path}/?token=${process.env.tokenStoryblok}`, {
      params: {
        version: payload.query._storyblok !== undefined || payload.isDev ? 'draft' : 'published',
      },
    })
  },
}
