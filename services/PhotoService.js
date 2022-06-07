import { apiClient } from './common/http-unsplash'

export default {
  getPhotos() {
    return apiClient.get('/photos')
  },
}
