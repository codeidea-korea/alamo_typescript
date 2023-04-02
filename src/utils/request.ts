import axios from 'axios'

import { getToken, removeToken, setToken } from '@/utils/token'

let only = true

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 5000,
})

request.interceptors.request.use((request) => {
  request.headers['Authorization'] = `Bearer ${getToken('_auth')}`
  return request
})

request.interceptors.response.use((response) => {
  return response
})

export default request
