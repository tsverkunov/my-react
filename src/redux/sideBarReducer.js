import {usersAPI} from "../api/api";
import {setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching} from "./usersReducer";

const SET_FRIENDS = "SET_FRIENDS";


let initialState = {
   friends: [
      // {id: 1, name: 'Ivan', ava: null},
      // {id: 2, name: 'Victoria', ava: 'https://i.redd.it/ahg5rdrp9vxz.jpg'},
      // {
      //    id: 3,
      //    name: 'Valeria',
      //    ava: 'https://afisha.a42.ru/uploads/posters/0a/0a7dca20-54d9-11e7-b30e-5fa7d75e7775.jpg'
      // }
   ]
};

const sideBarReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_FRIENDS:
         return {...state, friends: action.friend}
      default:
         return state;
   }
}


export const setFriends = (friend) => ({type: SET_FRIENDS, friend})


export const requestFriends = (friend) => async (dispatch) => {
   // dispatch(setCurrentPage(currentPage));
   // dispatch(toggleIsFetching(true));
   let data = await usersAPI.requestFriends(friend);
   // dispatch(toggleIsFetching(false));
   dispatch(setFriends(data.items));
   // dispatch(setTotalUserCount(data.totalCount));
}

export default sideBarReducer;