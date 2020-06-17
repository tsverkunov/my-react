import * as axios from "axios";


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "ece8ec33-8cc4-4d7e-9ea7-23ed4606e36c"
   }
})


export const usersAPI = {
   requestUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data;
         });
   },
   follow(id) {
      return instance.post(`follow/${id}`)
         .then(response => {
            return response.data;
         });
   },
   unfollow(id) {
      return instance.delete(`follow/${id}`)
         .then(response => {
            return response.data;
         });
   }
}

export const profileAPI = {
   getProfile(id) {
      return instance.get(`profile/${id}`)
         .then(response => {
            return response.data;
         });
   },
   getStatus(id) {
      return instance.get(`profile/status/${id}`)
         .then(response => {
            return response.data;
         });
   },
   updateStatus(status) {
      return instance.put(`profile/status`, {status: status});
   },
   updateDataProfile(formData) {
      return instance.put(`profile`, formData)
   },
   savePhoto(photoFile) {
      const formData = new FormData();
      formData.append("image", photoFile);
      return instance.put(`profile/photo`, formData);
   }
}

export const authAPI = {
   setData() {
      return instance.get(`auth/me`)
         .then(response => {
            return response.data;
         });
   },
   login(email, password, rememberMe = false, captcha ) {
      return instance.post(`auth/login`,
         {
            email,
            password,
            rememberMe,
            captcha
         })
         .then(response => {
            return response.data;
         });
   },
   logout() {
      return instance.delete(`auth/login`)
         .then(response => {
            return response.data;
         });
   }
}


export const securityAPI = {
   getCaptchaUrl() {
      return instance.get(`security/get-captcha-url`)
   }
}