import {radioAPI} from "../api/apiMusic";


const TOGGLE_IS_FETCHING = 'music/TOGGLE_IS_FETCHING';
const SET_RADIO_CHANNEL = 'music/SET_RADIO_CHANNEL';
const SET_SEARCH_RESULT = 'music/SET_SEARCH_RESULT';



const initialState = {
   radioChannel: [],
   isFetching: false,
   searchResult: null
}
type InitialStateType = typeof initialState
const musicReducer = (state = initialState, action:any): InitialStateType => {
   switch (action.type) {
      case TOGGLE_IS_FETCHING:
         return {...state, isFetching: action.isFetching};
      case SET_RADIO_CHANNEL:
         return {...state,
            radioChannel: action.radioChannel};
      case SET_SEARCH_RESULT:
         return {...state, searchResult: action.searchResult};
      default:
         return state;
   }
}
//Dispatches
type ToggleIsFetchingActionType = {
   type: typeof TOGGLE_IS_FETCHING
   isFetching: boolean,
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})

type SetRadioActionType = {
   type: typeof SET_RADIO_CHANNEL
   radioChannel: any
}
export const setRadio = (radioChannel: any): SetRadioActionType => ({type: SET_RADIO_CHANNEL, radioChannel})

type SetSearchResultActionType = {
   type: typeof SET_SEARCH_RESULT
   searchResult: string | null
}
export const setSearchResult = (searchResult: string | null): SetSearchResultActionType => ({type: SET_SEARCH_RESULT, searchResult})

// Thunk
export const getTracks = () => async (dispatch:any) => {
   dispatch(toggleIsFetching(true));
   let data = await radioAPI.getTrack();
   dispatch(setRadio(data.data.data));
   dispatch(toggleIsFetching(false));
    // dispatch(setSearchResult());
}

export const searchResult = (searchResult: null | string ) => (dispatch:any) => {
   dispatch(toggleIsFetching(true));
   dispatch(setSearchResult(searchResult));
   radioAPI.getTrack(searchResult).then((data:any) => {
      dispatch(setRadio(data.data.data));
      dispatch(toggleIsFetching(false));
   });
}

// export const searchResult = (searchResult) => (dispatch) => {
//    dispatch(toggleIsFetching(true));
//    dispatch(setSearchResult());
//    radioAPI.getTrack(searchResult).then(data => {
//       dispatch(setRadio(data.data));
//       dispatch(toggleIsFetching(false));
//    });
// }
export default musicReducer;

