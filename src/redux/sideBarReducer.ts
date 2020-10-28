import {UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {usersAPI} from "../api/users-api";

let initialState = {
  friends: [] as Array<UserType>,
  pageSize: 10,
  totalFriendsCount: 0,
  isFetching: false,
  currentPage: 1,
};


const sideBarReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
     case "my-react/sideBar/SET_FRIENDS":
        return {...state, friends: action.friends}
     case "my-react/sideBar/SET_TOTAL_COUNT":
      return {...state, totalFriendsCount: action.count}
     case "my-react/sideBar/SET_CURRENT_PAGE":
        return {...state, currentPage: action.currentPage}
     case  "my-react/sideBar/TOGGLE_IS_FETCHING":
      return {...state, isFetching: action.isFetching}
     default:
      return state;
  }
}

//ActionCreators
export const actions = {
   setFriends: (friends: Array<UserType>) => ({type: "my-react/sideBar/SET_FRIENDS", friends} as const),
   setTotalFriendsCount: (count: number) => ({type: "my-react/sideBar/SET_TOTAL_COUNT", count} as const),
   setFriendsCurrentPage: (currentPage: number) => ({type: "my-react/sideBar/SET_CURRENT_PAGE", currentPage} as const),
   toggleIsFetchingFriends: (isFetching: boolean) => ({type: "my-react/sideBar/TOGGLE_IS_FETCHING", isFetching} as const)
}

// Thunk
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>
export const requestFriends = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.setFriendsCurrentPage(currentPage));
    dispatch(actions.toggleIsFetchingFriends(true));
    let data = await usersAPI.requestFriends(currentPage, pageSize);
    dispatch(actions.toggleIsFetchingFriends(false));
    dispatch(actions.setFriends(data.items));
    dispatch(actions.setTotalFriendsCount(data.totalCount));
  }
}

export default sideBarReducer;

//Typing
export type InitialStateType = typeof initialState;
type ActionTypes = InferActionsTypes<typeof actions>