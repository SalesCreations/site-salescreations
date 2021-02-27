import { apiClient } from './common/http-github'

export default {
  getRepositories() {
    return apiClient.get('/users/rsales/repos', {
      params: {
        type: 'all',
        per_page: 6,
      },
    })
  },
}
