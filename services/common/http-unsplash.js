const url = 'https://api.unsplash.com/users/salescreations/';

export const apiClient = (path) => {
  return  useFetch(`${url}${path}`, {
    headers: { 
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    params: {
      client_id: useRuntimeConfig().public.unsplashKey,
      per_page: 28,
    },
  })
}