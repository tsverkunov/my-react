import {usersAPI} from "../api/api";
import {UserType} from "../types/types";

const SET_FRIENDS = "my-react/sideBar/SET_FRIENDS";
const SET_TOTAL_COUNT ="my-react/sideBar/SET_TOTAL_COUNT";
const SET_CURRENT_PAGE ="my-react/sideBar/SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = 'my-react/sideBar/TOGGLE_IS_FETCHING';


let initialState = {
   friends: [] as Array<UserType>,
   pageSize: 10,
   totalFriendsCount: 0,
   isFetching: false,
   currentPage: 1,
};
export type InitialStateType = typeof initialState;

const sideBarReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case SET_FRIENDS:
         return {...state, friends: action.friend}
      case SET_TOTAL_COUNT:
         return {...state, totalFriendsCount: action.count};
      case TOGGLE_IS_FETCHING:
         return {...state, isFetching: action.isFetching};
      case SET_CURRENT_PAGE:
         return {...state, currentPage: action.currentPage};
      default:
         return state;
   }
}
//Dispatches
type SetFriendsActionType = {
   type: typeof SET_FRIENDS
   friend: any
}
export const setFriends = (friend: any):SetFriendsActionType => ({type: SET_FRIENDS, friend})
type SetTotalFriendsCountActionType = {
   type: typeof SET_TOTAL_COUNT
   count: number
}
export const setTotalFriendsCount = (count: number):SetTotalFriendsCountActionType => ({type: SET_TOTAL_COUNT, count})
type SetFriendsCurrentPageActionType = {
   type: typeof SET_CURRENT_PAGE
   currentPage: number
}
export const setFriendsCurrentPage = (currentPage: number):SetFriendsCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
type ToggleIsFetchingFriendsActionType = {
   type: typeof TOGGLE_IS_FETCHING
   isFetching: boolean
}
export const toggleIsFetchingFriends = (isFetching: boolean):ToggleIsFetchingFriendsActionType => ({type: TOGGLE_IS_FETCHING, isFetching})

export const requestFriends = (currentPage: number, pageSize: number) => async (dispatch: any ) => {
   // dispatch(setFriendsCurrentPage(currentPage));
   dispatch(toggleIsFetchingFriends(true));
   let data = await usersAPI.requestFriends(currentPage, pageSize);
   dispatch(toggleIsFetchingFriends(false));
   dispatch(setFriends(data.items));
   dispatch(setTotalFriendsCount(data.totalCount));
}

export default sideBarReducer;