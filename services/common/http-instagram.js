import axios from 'axios'

export const apiClient = axios.create({
  baseURL: `https://`,
  whithCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
