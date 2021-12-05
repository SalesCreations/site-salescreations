import { apiClient } from './common/http-dribbble'

export default {
  getShots() {
    return apiClient.get('/shots')
  },
}
