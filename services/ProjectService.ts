import { apiClient } from './common/http-storyblok'

export default {
  getProjects(path: any) {
    return apiClient.get('', {
      params: {
        starts_with: path.substr(1),
      },
    })
  },
  getProject(path: any) {
    return apiClient.get(`${path}`)
  },
}
