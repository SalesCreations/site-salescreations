import { apiClient } from './common/http-contentful'

export default {
  getSkills() {
    return apiClient.get(`/entries?access_token=${process.env.CTF_CDA_ACCESS_TOKEN}&content_type=skills`)
  },
}
