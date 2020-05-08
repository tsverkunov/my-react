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
                ...action.data,
                isAuth: true
            };
            case SET_CURRENT_USER_DATA:
            return {
                ...state, currentAva: action.ava
            };
        default:
            return state;
    }
}


export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const setCurrentUserAva = (ava) => ({type: SET_CURRENT_USER_DATA, ava})

export default authReducer;