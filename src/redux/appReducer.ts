import {getAuthUserData} from "./authReducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';

//  типизация initialState
export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}
//  типизация action
//Dispatches
type InitializeSuccessActionType = {
    type: typeof INITIALIZE_SUCCESS
}
export const initializeSuccess = (): InitializeSuccessActionType => ({type: INITIALIZE_SUCCESS})
//Thunk
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then( () => {
            dispatch(initializeSuccess());
        });
}


export default appReducer