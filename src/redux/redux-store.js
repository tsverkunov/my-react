import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import musicReducer from "./musicReducer";
import newsReducer from "./newsReducer";

let reducers = combineReducers({
   profileReducer,
   messageReducer,
   sideBarReducer,
   usersReducer,
   authReducer,
   form: formReducer,
   appReducer,
   musicReducer,
   newsReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;

window.store = store;