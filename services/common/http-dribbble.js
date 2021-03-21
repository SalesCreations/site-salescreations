import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://api.dribbble.com/v2/user',
  whithCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.DRIBBBLE_TOKEN}`,
  },
})
