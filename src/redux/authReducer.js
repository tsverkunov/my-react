import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CURRENT_USER_DATA = 'SET_CURRENT_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    currentAva: 1
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SET_CURRENT_USER_DATA:
            return {
                ...state, currentAva: action.ava
            };
        default:
            return state;
    }
}


export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const setCurrentUserAva = (ava) => ({type: SET_CURRENT_USER_DATA, ava})

export const getAuthUserData = () => (dispatch) => {
    authAPI.setData().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setUserData(id, email, login, true));
            dispatch(setAva(id));
        }
    });
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        }else {
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
const setAva = (id) => {
    return (dispatch) => {
        authAPI.setAva(id).then(data => {
            dispatch(setCurrentUserAva(data.photos));
        })
    };
}

export default authReducer;