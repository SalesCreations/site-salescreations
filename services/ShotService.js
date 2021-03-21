import { apiClient } from './common/http-dribbble'

export default {
  getSkills() {
    return apiClient.get('/shots')
  },
}
