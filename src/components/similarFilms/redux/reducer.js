// Types
import {types} from './types';
import {initialState} from "./initialState";

export const similarFilms = (state = initialState, action) => {
    switch (action.type) {
        case types.SIMILAR_FILMS_START_FETCHING:
            return {...state, isFetching: true};
        case types.SIMILAR_FILMS_STOP_FETCHING:
            return {...state, isFetching: false};
        case types.SIMILAR_FILMS_SET_FETCHING_ERROR:
            return {...state, error: action.payload, similarFilms: []};
        case types.SIMILAR_FILMS_FILL:
            return {...state, similarFilms: action.payload}
        default:
            return state;
    }
};
