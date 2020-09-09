import {updateObjectInArray} from "../utilities/object-helper";
import {UserType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "react";
import {usersAPI} from "../api/users-api";
import {actionsProfile, requestFollowed} from "./profileReducer";


let initialState = {
  users: [] as Array<UserType>,
  pageSize: 12,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,  // array of users id
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "users/SUBSCRIBE":
      return {
        ...state,
        users: updateObjectInArray(state.users,
          action.userId, "id", {followed: true})
      };
    case "users/UNSUBSCRIBE":
      return {
        ...state,
        users: updateObjectInArray(state.users,
          action.userId, "id", {followed: false})
      };
    case "users/SET_USERS":
      return {...state, users: action.users};
    case "users/SET_CURRENT_PAGE":
      return {...state, currentPage: action.pageNumber};
    case "users/SET_TOTAL_COUNT":
      return {...state, totalUserCount: action.count};
    case "users/TOGGLE_IS_FETCHING":
      return {...state, isFetching: action.isFetching};
    case "users/TOGGLE_IS_FOLLOWING_PROGRESS":
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
// Action Creators
export const actions = {
  followSuccess: (userId: number) => ({type: 'users/SUBSCRIBE', userId} as const),
  unfollowSuccess: (userId: number) => ({type: 'users/UNSUBSCRIBE', userId} as const),
  setUsers: (users: Array<UserType>) => ({type: 'users/SET_USERS', users} as const),
  setCurrentPage: (pageNumber: number) => ({type: 'users/SET_CURRENT_PAGE', pageNumber} as const),
  setTotalUserCount: (setTotalCount: number) => ({type: 'users/SET_TOTAL_COUNT', count: setTotalCount} as const),
  toggleIsFetching: (isFetching: boolean) => ({type: 'users/TOGGLE_IS_FETCHING', isFetching} as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
    type: 'users/TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching, userId
  } as const)
}

//Thunk
export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.setCurrentPage(currentPage))
    dispatch(actions.toggleIsFetching(true))

    let data = await usersAPI.requestUsers(currentPage, pageSize)
    dispatch(actions.setUsers(data.items))
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setTotalUserCount(data.totalCount))
  }
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
                                   userId: number,
                                   apiMethod: any,
                                   actionCreator: (userId: number) => ActionsTypes,
                                   setSubscribed: (followed: boolean) => any,
                                   isSubscribed: boolean
) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
    dispatch(setSubscribed(isSubscribed));
  }
  dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess, actionsProfile.setSubscribed, true)
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess, actionsProfile.setSubscribed, false)
  }
}

export default usersReducer

export type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InferActionsTypes<typeof actions>