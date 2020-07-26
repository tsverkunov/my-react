import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utilities/object-helper";
import {setSubscribed} from "./profileReducer";
import {UserType} from "../types/types";

const SUBSCRIBE = 'my-react/users/SUBSCRIBE';
const UNSUBSCRIBE = 'my-react/users/UNSUBSCRIBE';
const SET_USERS = 'my-react/users/SET_USERS';
const SET_CURRENT_PAGE = 'my-react/users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'my-react/users/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'my-react/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'my-react/users/TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
   users: [] as Array<UserType>,
   pageSize: 12,
   totalUserCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [] as Array<number>,  // array of users id
}
export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case SUBSCRIBE:
         return {
            ...state,
            users: updateObjectInArray(state.users,
               action.userId, "id", {followed: true})
         };
      case UNSUBSCRIBE:
         return {
            ...state,
            users: updateObjectInArray(state.users,
               action.userId, "id", {followed: false})
         };
      case SET_USERS:
         return {...state, users: action.users};
      case SET_CURRENT_PAGE:
         return {...state, currentPage: action.pageNumber};
      case SET_TOTAL_COUNT:
         return {...state, totalUserCount: action.count};
      case TOGGLE_IS_FETCHING:
         return {...state, isFetching: action.isFetching};
      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id !== action.userId)
         };
      default:
         return state;
   }
}
//Dispatches
type FollowSuccessActionType = {
   type: typeof SUBSCRIBE
   userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({type: SUBSCRIBE, userId})
type UnfollowSuccessActionType = {
   type: typeof UNSUBSCRIBE
   userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNSUBSCRIBE, userId})
type SetUsersActionType = {
   type: typeof SET_USERS
   users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})
type SetCurrentPageActionType = {
   type: typeof SET_CURRENT_PAGE
   pageNumber: number
}
export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, pageNumber})
type SetTotalUserCountActionType = {
   type: typeof SET_TOTAL_COUNT
   count: number
}
export const setTotalUserCount = (setTotalCount: number): SetTotalUserCountActionType => ({type: SET_TOTAL_COUNT, count: setTotalCount})
type ToggleIsFetchingActionType = {
   type: typeof TOGGLE_IS_FETCHING
   isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})
type ToggleFollowingProgressActionType = {
   type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
   isFetching: boolean
   userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
   type: TOGGLE_IS_FOLLOWING_PROGRESS,
   isFetching,
   userId
})

//Thunk
export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
   dispatch(setCurrentPage(currentPage));
   dispatch(toggleIsFetching(true));
   let data = await usersAPI.requestUsers(currentPage, pageSize);
   dispatch(setUsers(data.items));
   dispatch(toggleIsFetching(false));
   dispatch(setTotalUserCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any, isSubscribed: any) => {
   dispatch(toggleFollowingProgress(true, userId));
   let data = await apiMethod(userId);
   if (data.resultCode === 0) {
      dispatch(actionCreator(userId));
      dispatch(setSubscribed(isSubscribed));
   }
   dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number) => async (dispatch: any) => {
   followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess, true)
}

export const unfollow = (userId: number) => async (dispatch: any) => {
   followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess, false)
}


export default usersReducer;

