import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_LIKE = 'ADD_LIKE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    post: [
        {id: 1, message: 'Hi, how are you?', likesCount: 912},
        {id: 3, message: 'It\'s my first experience!', likesCount: 7}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                post: [...state.post, newPost]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case ADD_LIKE:
            return {
                ...state,
                post: state.post.map( p => {
                    if (p.id === action.postId) {
                        return {...p, likesCount: p.likesCount +1}
                    }
                    return p
                })
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addLikeAC = (postId) => ({type: ADD_LIKE, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setProfile = (userId) =>  (dispatch) => {
        usersAPI.setProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
}

export default profileReducer;