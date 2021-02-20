import { apiClient } from './common/http-contentful'

export default {
  getSkills() {
    return apiClient.get({
      params: {
        access_token: process.env.CTF_CDA_ACCESS_TOKEN,
        content_type: 'skills',
      },
    })
  },
}
