import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import musicReducer from "./musicReducer";

let reducers = combineReducers({
    profileReducer,
    messageReducer,
    sideBarReducer,
    usersReducer,
    authReducer,
    form: formReducer,
    appReducer,
    musicReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;

window.store = store;