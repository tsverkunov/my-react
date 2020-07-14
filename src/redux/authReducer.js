import {authAPI, profileAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'my-react/auth/SET_USER_DATA';
const SET_CAPTCHA_URL_SUCCESS = 'my-react/auth/SET_CAPTCHA_URL_SUCCESS';
const SET_AVATAR = 'my-react/auth/SET_AVATAR';
const SET_ERROR_MESSAGE = 'my-react/auth/SET_ERROR_MESSAGE';
const RESET_ERROR_MESSAGE = 'my-react/auth/RESET_ERROR_MESSAGE';


let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
   avatar: null,
   captchaUrl: null,
   errorMessage: null
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
      case SET_CAPTCHA_URL_SUCCESS:
      case SET_AVATAR:
      case SET_ERROR_MESSAGE:
         return {
            ...state,
            ...action.payload
         };
      case RESET_ERROR_MESSAGE:
         return {
            ...state,
            captchaUrl: null,
            errorMessage: null,
         }
      default:
         return state;
   }
}


export const setUserData = (id, email, login, isAuth, avatar) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth, avatar}})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})
export const setAvatar = (avatar) => ({type: SET_AVATAR, payload: {avatar}})
export const setError = (errorMessage) => ({type: SET_ERROR_MESSAGE, payload: {errorMessage}})
export const resetError = () => ({type: RESET_ERROR_MESSAGE})

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
         let message = data.messages.length > 0 ? data.messages[0] : "Some error";
         if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
         }
         // else if (data.resultCode === 1) {
            // alert(message);
            // dispatch(setError(message));
         // }
         // dispatch(stopSubmit('login', {_error: message}));
         dispatch(setError(message));
      }
   });
}
export const logout = () => (dispatch) => {
   authAPI.logout().then(data => {
      if (data.resultCode === 0) {
         dispatch(setUserData(null, null, null, false, null));
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