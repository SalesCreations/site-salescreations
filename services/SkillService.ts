import { apiClient } from './common/http-storyblok'

export default {
  getServices(path: any) {
    return apiClient.get('', {
      params: {
        starts_with: path.substr(1),
      },
    })
  },
}
