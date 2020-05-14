import { types } from './types';

const initialState = {
    topRatedFilms: null,
    isFetching: false,
    error: false
};

export const topRatedFilmsReducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case types.TOP_RATED_FILMS_START_FETCHING:
            return { ...state, isFetching: true };
        case types.TOP_RATED_FILMS_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.TOP_RATED_FILMS_SET_FETCHING_ERROR:
            return { ...state, error: payload, topRatedFilms: null };
        case types.TOP_RATED_FILMS_FILL:
            return { ...state, topRatedFilms: payload, error: false }
        default:
            return state;
    }
};
