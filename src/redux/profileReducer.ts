import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAvatar} from "./authReducer";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'my-react/profile/ADD-POST';
const ADD_LIKE = 'my-react/profile/ADD_LIKE';
const SET_USER_PROFILE = 'my-react/profile/SET_USER_PROFILE';
const SET_STATUS = 'my-react/profile/SET_STATUS';
const DELETE_POST = 'my-react/profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'my-react/profile/SAVE_PHOTO-SUCCESS';
const SET_SUBSCRIBED = 'my-react/profile/SET_SUBSCRIBED';


let initialState = {
  post: [
    {id: 1, message: 'My React JS.', likesCount: 777},
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  followed: null
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action:any): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.post.length + 1,
        message: action.newPostBody,
        likesCount: 0
      };
      return {
        ...state,
        post: [...state.post, newPost]
      };
     case DELETE_POST:
        return {
           ...state,
           post: state.post.filter(p => p.id !== action.postsId)
        };
    case ADD_LIKE:
      return {
        ...state,
        post: state.post.map(p => {
          if (p.id === action.postId) {
            return {...p, likesCount: p.likesCount + 1}
          }
          return p
        })
      };
    case SET_USER_PROFILE:
      return {...state, profile: action.profile};
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos
        } as ProfileType
      };
    case SET_STATUS:
      return {...state, status: action.status};
    case SET_SUBSCRIBED:
      return {...state, followed: action.followed};
    default:
      return state;
  }
}
//Dispatches
type AddPostActionType = {
  type: typeof ADD_POST
  newPostBody: string
}
export const addPost = (newPostBody: string): AddPostActionType => ({type: ADD_POST, newPostBody})
type AddLikeActionType = {
  type: typeof ADD_LIKE
  postId: number
}
export const addLike = (postId: number): AddLikeActionType => ({type: ADD_LIKE, postId})
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})
type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})
type SetSubscribedActionType = {
  type: typeof SET_SUBSCRIBED
  followed: boolean
}
export const setSubscribed = (followed: boolean ): SetSubscribedActionType => ({type: SET_SUBSCRIBED, followed})
type DeletePostActionType = {
  type: typeof DELETE_POST
  postsId: number
}
export const deletePost = (postsId: number): DeletePostActionType => ({type: DELETE_POST, postsId})

//Thunks
export const getProfile = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(requestFollowed(userId));
  dispatch(setUserProfile(data));
}
export const getStatus = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
}
export const requestFollowed = (userId: number) => async (dispatch: any) => {
  const data = await usersAPI.requestFollowed(userId);
  dispatch(setSubscribed(data));
}
export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    alert(error);
  }
}
export const updateDataProfile = (formData: any) => async (dispatch: any, getState: any) => {
  const userId = getState().authReducer.id;
  const response = await profileAPI.updateDataProfile(formData);
  if (response.data.resultCode === 0) {
    dispatch(getProfile(userId));

  } else if (response.data.resultCode === 1) {
    dispatch()
  } else {
    let message = response.data.messages.length > 0
       ? response.data.messages[0]
       : "Some error";

    let regExp = /(?<=\>)\w+(?=\))/g;
    let errorTitle = String(message.match(regExp)).toLowerCase();
    dispatch(stopSubmit('profileForm', {"contacts": {[errorTitle]: "Invalid URL"}}));
    return Promise.reject(message);
  }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
    dispatch(getAvatar());
  }
}


export default profileReducer;