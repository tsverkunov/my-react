import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../api/api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {profileAPI} from "../api/profile-api";
import {securityAPI} from "../api/security-api";
import {authAPI} from "../api/auth-api";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  avatar: null as string | null,
  captchaUrl: null as string | null,
  errorMessage: null as string | null
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "NS/AUTH/SET_USER_DATA":
    case "NS/AUTH/SET_CAPTCHA_URL_SUCCESS":
    case "NS/AUTH/SET_AVATAR":
    case "NS/AUTH/SET_ERROR_MESSAGE":
      return {
        ...state,
        ...action.payload
      }
    case "NS/AUTH/RESET_ERROR_MESSAGE":
      return {
        ...state,
        captchaUrl: null,
        errorMessage: null,
      }
    default:
      return state;
  }
}

//Action Creators
export const actions = {
  setUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean, avatar: string | null) => ({
    type: 'NS/AUTH/SET_USER_DATA', payload:
      {userId, email, login, isAuth, avatar}
  } as const),
  setCaptchaUrl: (captchaUrl: string) => ({
    type: 'NS/AUTH/SET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const),
  setAvatar: (avatar: string | null) => ({type: 'NS/AUTH/SET_AVATAR', payload: {avatar}} as const),
  setError: (errorMessage: string) => ({type: 'NS/AUTH/SET_ERROR_MESSAGE', payload: {errorMessage}} as const),
  resetError: () => ({type: 'NS/AUTH/RESET_ERROR_MESSAGE'} as const)
}

//Thunk
export const getAuthUserData = (): ThunkType => async (dispatch) => {
   let data = await authAPI.setData();
    if (data.resultCode === ResultCodesEnum.Success) {
      let {id, email, login} = data.data;
      dispatch(actions.setUserData(id, email, login, true, ''));
      await dispatch(getAvatar());
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType =>  {
  return async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success ) {
      await dispatch(getAuthUserData());
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : "Some error";
      if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
       await dispatch(getCaptchaUrl());
      }
      // else if (data.resultCode === 1) {
      // alert(message);
      // dispatch(setError(message));
      // }
      // dispatch(stopSubmit('login', {_error: message}));
      dispatch(actions.setError(message));
    }
  }
}
export const logout = (): ThunkType => {
  return async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.setUserData(null, null, null, false, null));
    }
  }
}
export const getCaptchaUrl = (): ThunkType => {
  return async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.setCaptchaUrl(captchaUrl));
  }
}

export const getAvatar = (): ThunkType => {
  return async (dispatch, getState) => {
    const userId = getState().authReducer.userId;
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setAvatar(data.photos.small))
  }
}

export default authReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>