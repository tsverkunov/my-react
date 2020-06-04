import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const ADD_LIKE = 'profile/ADD_LIKE';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';


let initialState = {
    post: [
        {id: 1, message: 'Hi, how are you?', likesCount: 912},
        {id: 2, message: 'My React.', likesCount: 777},
        {id: 3, message: 'It\'s my first experience!', likesCount: 7}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: action.postId + 1,
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
        case SET_STATUS:
            return {...state, status: action.status};

        default:
            return state;
    }
}

export const addPost = (newPostBody, postId) => ({type: ADD_POST, newPostBody, postId})
export const addLike = (postId) => ({type: ADD_LIKE, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postsId) => ({type: DELETE_POST, postsId})


export const getProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data));
}
export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data));
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}

export default profileReducer;