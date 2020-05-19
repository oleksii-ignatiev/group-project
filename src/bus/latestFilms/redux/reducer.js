// Types
import {types} from './types';
import {initialState} from "./initialState";

export const latestFilms = (state = initialState, action) => {
    switch (action.type) {
        case types.LATEST_FILMS_START_FETCHING:
            return {...state, isFetching: true};
        case types.LATEST_FILMS_STOP_FETCHING:
            return {...state, isFetching: false};
        case types.LATEST_FILMS_SET_FETCHING_ERROR:
            return {...state, error: action.payload, latestFilmDetails: {}};
        case types.LATEST_FILMS_FILL:
            return {...state, latestFilmDetails: action.payload}    
        default:
            return state;
    }
};
