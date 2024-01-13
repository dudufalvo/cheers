import axios from 'axios'

const getAxiosInstance = (type: string) => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_REQUEST_URL,
    timeout: 15000
  })

  axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `${token}`
    config.headers['Content-Type'] = type === 'json' ? 'application/json' : 'multipart/form-data'
    return config
  })

  return axiosInstance
}

//const axiosInstanceJson = getAxiosInstance('json')
const axiosInstance = getAxiosInstance('form')

const api = {
  /* Users */
  getUser() {
    return axiosInstance.get('/users')
  },
  updateUser(data: FormData) {
    return axiosInstance.put('/users', data)
  },
  updateUserPassword(data: { current_password: string, password: string, confirm_password: string }) {
    return axiosInstance.put('/users/password', { user: data })
  },
  deleteUser({ password }: { password: string }) {
    return axiosInstance.delete('/users', { data: { user: { password } } })
  },
  getFavorites({ page }: { page: number }) {
    return axiosInstance.get('/users/favorites', { params: { page } })
  },
  getFilteredUsers(email_query: string) {
    return axiosInstance.get('/users/filter', { params: { email: email_query } })
  }
}

export default api
