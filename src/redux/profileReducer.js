import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAvatar} from "./authReducer";

const ADD_POST = 'profile/ADD-POST';
const ADD_LIKE = 'profile/ADD_LIKE';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO-SUCCESS';


let initialState = {
   post: [
      {id: 1, message: 'My React JS.', likesCount: 777},
   ],
   profile: null,
   status: '',
};

const profileReducer = (state = initialState, action) => {
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
            post: state.post.filter(p => p.id != action.postsId)
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
            }
         };
      case SET_STATUS:
         return {...state, status: action.status};
      default:
         return state;
   }
}
//Dispatches
export const addPost = (newPostBody, postId) => ({type: ADD_POST, newPostBody, postId})
export const addLike = (postId) => ({type: ADD_LIKE, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postsId) => ({type: DELETE_POST, postsId})

//Thunks
export const getProfile = (userId) => async (dispatch) => {
   const data = await profileAPI.getProfile(userId);
   dispatch(setUserProfile(data));
}
export const getStatus = (userId) => async (dispatch) => {
   const data = await profileAPI.getStatus(userId);
   dispatch(setStatus(data));
}
export const updateStatus = (status) => async (dispatch) => {
   try {
      const response = await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
         dispatch(setStatus(status));
      }
   } catch (error) {
      alert(error);
   }
}
export const updateDataProfile = (formData) => async (dispatch, getState) => {
   const userId = getState().authReducer.id;
   const response = await profileAPI.updateDataProfile(formData);
   if (response.data.resultCode === 0) {
      dispatch(getProfile(userId));
   } else {
      let message = response.data.messages.length > 0
         ? response.data.messages[0]
         : "Some error";
      dispatch(stopSubmit('profileForm', {"contacts": {"facebook": message}}));
      return Promise.reject(message);
   }
}
export const savePhoto = (file) => async (dispatch) => {
   let response = await profileAPI.savePhoto(file);
   if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
      dispatch(getAvatar());
   }
}


export default profileReducer;