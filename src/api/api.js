import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ece8ec33-8cc4-4d7e-9ea7-23ed4606e36c"
    }
})


export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}

export const followedAPI = {
    follow (id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow (id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    }
}

export const authDataAPI = {
    setData () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    setAva (id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data;
            });
    }
}

export const profileAPI = {
    setProfile (id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data;
            });
    }
}