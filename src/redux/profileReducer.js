import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const ADD_LIKE = 'ADD_LIKE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    post: [
        {id: 1, message: 'Hi, how are you?', likesCount: 912},
        {id: 3, message: 'It\'s my first experience!', likesCount: 7}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.newPostBody,
                likesCount: 0
            };
            return {
                ...state,
                post: [...state.post, newPost]
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
        case SET_STATUS:
            return {...state, status: action.status};

        default:
            return state;
    }
}

export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody})
export const addLike = (postId) => ({type: ADD_LIKE, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data));
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}

export default profileReducer;