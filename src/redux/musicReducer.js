import {radioAPI} from "../api/apiMusic";


const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_RADIO_CHANNEL = 'SET_RADIO_CHANNEL';
const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';

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

export const getTracks = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        radioAPI.getTrack().then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setRadio(data.data));
            dispatch(setSearchResult())
        });
    }
}
export const searchResult = (searchResult) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        radioAPI.getTrack(searchResult).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setRadio(data.data));
            dispatch(setSearchResult());

        });
    }
}


export default musicReducer;

