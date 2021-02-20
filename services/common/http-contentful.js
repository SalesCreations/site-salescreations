import axios from 'axios'

export const apiClient = axios.create({
  baseURL: `https://cdn.contentful.com/spaces/${process.env.CTF_SPACE_ID}`,
  whithCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
