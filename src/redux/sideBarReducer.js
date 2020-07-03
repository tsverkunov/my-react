import {usersAPI} from "../api/api";
import {setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching} from "./usersReducer";

const SET_FRIENDS = "my-react/sideBar/SET_FRIENDS";
const SET_TOTAL_COUNT ="my-react/sideBar/SET_TOTAL_COUNT";
const SET_CURRENT_PAGE ="my-react/sideBar/SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = 'my-react/sideBar/TOGGLE_IS_FETCHING';


let initialState = {
   friends: [],
   pageSize: 6,
   totalFriendsCount: 0,
   isFetching: false,
   // currentPage: 1,
};

const sideBarReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_FRIENDS:
         return {...state, friends: action.friend}
      case SET_TOTAL_COUNT:
         return {...state, totalFriendsCount: action.count};
      case TOGGLE_IS_FETCHING:
         return {...state, isFetching: action.isFetching};
      // case SET_CURRENT_PAGE:
      //    return {...state, currentPage: action.currentPage};
      default:
         return state;
   }
}


export const setFriends = (friend) => ({type: SET_FRIENDS, friend})
export const setTotalFriendsCount = (count) => ({type: SET_TOTAL_COUNT, count})
export const setFriendsCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetchingFriends = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const requestFriends = (currentPage, pageSize, friend) => async (dispatch) => {
   // dispatch(setFriendsCurrentPage(currentPage));
   dispatch(toggleIsFetchingFriends(true));
   let data = await usersAPI.requestFriends(currentPage, pageSize, friend);
   dispatch(toggleIsFetchingFriends(false));
   dispatch(setFriends(data.items));
   dispatch(setTotalFriendsCount(data.totalCount));
}

export default sideBarReducer;