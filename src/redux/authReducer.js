import {authAPI, profileAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL_SUCCESS = 'SET_CAPTCHA_URL_SUCCESS';
const SET_AVATAR = 'SET_AVATAR';


let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
   avatar: null,
   captchaUrl: null
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
      case SET_CAPTCHA_URL_SUCCESS:
      case SET_AVATAR:
         return {
            ...state,
            ...action.payload
         };
      default:
         return state;
   }
}


export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})
export const setAvatar = (avatar) => ({type: SET_AVATAR, payload: {avatar}})

export const getAuthUserData = () => (dispatch) => {
   return authAPI.setData().then(data => {
      if (data.resultCode === 0) {
         let {id, email, login} = data.data;
         dispatch(setUserData(id, email, login, true));
         dispatch(getAvatar());
      }
   });
}
export const login = (email, password, rememberMe, captcha) => (dispatch) => {
   authAPI.login(email, password, rememberMe, captcha).then(data => {
      if (data.resultCode === 0) {
         dispatch(getAuthUserData());

      } else {
         if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
         }
         let message = data.messages.length > 0 ? data.messages[0] : "Some error";
         dispatch(stopSubmit('login', {_error: message}));
      }
   });
}
export const logout = () => (dispatch) => {
   authAPI.logout().then(data => {
      if (data.resultCode === 0) {
         dispatch(setUserData(null, null, null, false));
      }
   });
}
export const getCaptchaUrl = () => async (dispatch) => {
   const response = await securityAPI.getCaptchaUrl();
   const captchaUrl = response.data.url;
   dispatch(setCaptchaUrl(captchaUrl));
}

export const getAvatar = () => async (dispatch, getState) => {
   const userId = getState().authReducer.id;
   const data = await profileAPI.getProfile(userId);
   dispatch(setAvatar(data.photos.small))
}

export default authReducer;