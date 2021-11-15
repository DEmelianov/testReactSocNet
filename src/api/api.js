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
      instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    )
  },
  unfollow(userId) {
    return (
      instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    )
  }
}