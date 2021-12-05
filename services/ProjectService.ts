import { apiClient } from './common/http-storyblok'

export default {
  getProjects(payload: any) {
    return apiClient.get('', {
      params: {
        starts_with: payload.path.substr(1),
        version: payload.query._storyblok !== undefined || payload.isDev ? 'draft' : 'published',
      },
    })
  },
  getProjectsRoutes(payload: any) {
    return apiClient.get('', {
      params: {
        starts_with: payload.path.substr(1),
        version: payload.isDev ? 'draft' : 'published',
      },
    })
  },
  getProject(payload: any) {
    return apiClient.get(`${payload.path}`, {
      params: {
        version: payload.query._storyblok !== undefined || payload.isDev ? 'draft' : 'published',
      },
    })
  },
}
