const url = 'https://api.dribbble.com/v2/user/shots';
const options = {
  server: false,
  headers: { 
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer db273e78d220207c1a328ac0ba5f1b1000599f6f0716ca16b673dc0b1132c03e`,
  }
}

export const apiClient = () => {
  const { data } = useLazyAsyncData('shots_lazy', () => {
    return $fetch(url, options);
  })
  return data
}