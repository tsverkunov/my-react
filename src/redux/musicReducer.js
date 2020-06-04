import {radioAPI} from "../api/apiMusic";


const TOGGLE_IS_FETCHING = 'music/TOGGLE_IS_FETCHING';
const SET_RADIO_CHANNEL = 'music/SET_RADIO_CHANNEL';
const SET_SEARCH_RESULT = 'music/SET_SEARCH_RESULT';

let initialState = {
   radioChannel: [],
   isFetching: false,
   searchResult: ''
}

const musicReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_IS_FETCHING:
         return {...state, isFetching: action.isFetching};
      case SET_RADIO_CHANNEL:
         return {...state, radioChannel: action.radioChannel};
      case SET_SEARCH_RESULT:
         return {...state, searchResult: action.searchResult};
      default:
         return state;
   }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setRadio = (radioChannel) => ({type: SET_RADIO_CHANNEL, radioChannel})
export const setSearchResult = (searchResult) => ({type: SET_SEARCH_RESULT, searchResult})

export const getTracks = () => async (dispatch) => {
   dispatch(toggleIsFetching(true));
   let data = await radioAPI.getTrack();
   dispatch(setRadio(data.data));
    dispatch(toggleIsFetching(false));
    // dispatch(setSearchResult());
}
export const searchResult = (searchResult) => (dispatch) => {
   dispatch(toggleIsFetching(true));
   dispatch(setSearchResult());
   radioAPI.getTrack(searchResult).then(data => {
      dispatch(setRadio(data.data));
      dispatch(toggleIsFetching(false));
   });
}


export default musicReducer;

