// Types
import { types } from './types';

const initialState = {
    filmDetails: {},
    isFetching: false,
    error: null,
};


export const filmDetailsReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case types.FILM_DETAILS_START_FETCHING:
            return { ...state, isFetching: true };
        case types.FILM_DETAILS_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.FILM_DETAILS_SET_FETCHING_ERROR:
            return { ...state, error: payload, filmDetails: {} };
        case types.FILM_DETAILS_FILL:
            return { ...state, filmDetails: payload, error: null };
        default:
            return state;
    }
};