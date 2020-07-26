import {authAPI, profileAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'my-react/auth/SET_USER_DATA';
const SET_CAPTCHA_URL_SUCCESS = 'my-react/auth/SET_CAPTCHA_URL_SUCCESS';
const SET_AVATAR = 'my-react/auth/SET_AVATAR';
const SET_ERROR_MESSAGE = 'my-react/auth/SET_ERROR_MESSAGE';
const RESET_ERROR_MESSAGE = 'my-react/auth/RESET_ERROR_MESSAGE';

export type InitialStateType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  avatar: string | null
  captchaUrl: string | null
  errorMessage: string | null
}

let initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  avatar: null,
  captchaUrl: null,
  errorMessage: null
};

const authReducer = (state = initialState, action: any): InitialStateType => {
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
//Dispatches
type SetUserDataActionTypePayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    avatar: string | null
}
type SetUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetUserDataActionTypePayloadType
}

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean, avatar: string | null): SetUserDataActionType => ({
  type: SET_USER_DATA, payload:
    {id, email, login, isAuth, avatar}
});

type SetCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL_SUCCESS
    payload: {captchaUrl: string}
}
export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlActionType => ({
    type: SET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

type SetAvatarActionType = {
    type: typeof SET_AVATAR
    payload: {avatar: string}
}
export const setAvatar = (avatar: string): SetAvatarActionType => ({type: SET_AVATAR, payload: {avatar}})

type SetErrorActionType = {
    type: typeof SET_ERROR_MESSAGE
    payload: {errorMessage: string}
}
export const setError = (errorMessage: string): SetErrorActionType => ({type: SET_ERROR_MESSAGE, payload: {errorMessage}})

type ResetErrorActionType = {
    type: typeof RESET_ERROR_MESSAGE
}
export const resetError = (): ResetErrorActionType => ({type: RESET_ERROR_MESSAGE})

//Thunk
export const getAuthUserData = () => async (dispatch: any) => {
   let response = await authAPI.setData();
    if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data;
      dispatch(setUserData(id, email, login, true, ''));
      dispatch(getAvatar());
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) =>  async (dispatch:any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      // else if (data.resultCode === 1) {
      // alert(message);
      // dispatch(setError(message));
      // }
      // dispatch(stopSubmit('login', {_error: message}));
      dispatch(setError(message));
    }
}
export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false, null));
    }
}
export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(setCaptchaUrl(captchaUrl));
}

export const getAvatar = () => async (dispatch: any, getState: any) => {
  const userId = getState().authReducer.id;
  const data = await profileAPI.getProfile(userId);
  dispatch(setAvatar(data.photos.small))
}

export default authReducer;