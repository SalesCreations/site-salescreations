import axios from 'axios'

export const apiClient = axios.create({
  baseURL: `https://api.github.com`,
  whithCredentials: false,
  headers: {
    Authorization: `Bearer ${process.env.GH_TOKEN}`,
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3+json',
  },
})
