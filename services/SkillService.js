import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://cdn.contentful.com`,
  whithCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getSkills() {
    return apiClient.get(
      `/spaces/${process.env.CTF_SPACE_ID}/entries?access_token=${process.env.CTF_CDA_ACCESS_TOKEN}&content_type=skills`
    )
  },
}
