import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://api.unsplash.com/users/salescreations/',
  whithCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    client_id: process.env.unsplashKey,
    per_page: 100,
  },
})
