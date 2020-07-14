import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utilities/object-helper";
import {setSubscribed} from "./profileReducer";

const SUBSCRIBE = 'my-react/users/SUBSCRIBE';
const UNSUBSCRIBE = 'my-react/users/UNSUBSCRIBE';
const SET_USERS = 'my-react/users/SET_USERS';
const SET_CURRENT_PAGE = 'my-react/users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'my-react/users/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'my-react/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'my-react/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
   users: [],
   pageSize: 12,
   totalUserCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [],
}
const usersReducer = (state = initialState, action) => {
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
               : state.followingInProgress.filter(id => id != action.userId)
         };
      default:
         return state;
   }
}


export const followSuccess = (userId) => ({type: SUBSCRIBE, userId})
export const unfollowSuccess = (userId) => ({type: UNSUBSCRIBE, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUserCount = (setTotalCount) => ({type: SET_TOTAL_COUNT, count: setTotalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
   type: TOGGLE_IS_FOLLOWING_PROGRESS,
   isFetching,
   userId
})


export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
   dispatch(setCurrentPage(currentPage));
   dispatch(toggleIsFetching(true));
   let data = await usersAPI.requestUsers(currentPage, pageSize);
   dispatch(setUsers(data.items));
   dispatch(toggleIsFetching(false));
   dispatch(setTotalUserCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator, isSubscribed) => {
   dispatch(toggleFollowingProgress(true, userId));
   let data = await apiMethod(userId);
   if (data.resultCode === 0) {
      dispatch(actionCreator(userId));
      dispatch(setSubscribed(isSubscribed));
   }
   dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
   followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess, true)
}

export const unfollow = (userId) => async (dispatch) => {
   followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess, false)
}


export default usersReducer;

