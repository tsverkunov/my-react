import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
    profileReducer,
    messageReducer,
    sideBarReducer,
    usersReducer,
    authReducer
});


let store = createStore(reducers);


export default store;

window.store = store;