import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'b7966b07-c235-4419-8e44-b431e2d687e7',
  }
})

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 5) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  follow(userId) {
    return (
      instance.post(`follow/${userId}`)
    )
  },
  unfollow(userId) {
    return (
      instance.delete(`follow/${userId}`)
    )
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please use profileAPI object')
    return (
      instance.get(`profile/${userId}`)
    )
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {
      status
    })
  }
}

export const authAPI = {
  me: () => instance.get(`auth/me`),
  login: (email, password, rememberMe = false) => instance.post('auth/login', {
    email, password, rememberMe
  }),
  logout: () => instance.delete('auth/login')
}