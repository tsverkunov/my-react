import {APIResponseType, GetItemsType, instance} from './api'


export const usersAPI = {
  requestUsers(currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null) {
    return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
      .then(response => response.data)
  },
  requestFriends(currentPage = 1, pageSize = 6, friend = true) {
    return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&friend=${friend}`)
      .then(response => response.data)
  },
  follow(id: number) {
    return instance.post<APIResponseType>(`follow/${id}`)
      .then(response => response.data)
  },
  unfollow(id: number) {
    return instance.delete(`follow/${id}`)
      .then(response => response.data)
  },
  requestFollowed(id: number | null) {
    return instance.get(`follow/${id}`)
      .then(response => response.data) as Promise<boolean>
  },
}