import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profileReducer,
    messageReducer,
    sideBarReducer,
    usersReducer,
    authReducer,
    form: formReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;

window.store = store;