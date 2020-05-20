// Types
import { types } from './typesRecommended';

const initialState = {
    recommendedMovies: [],
    isFetching: false,
    error: null,
};


export const recommendedMoviesReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case types.RECOMMENDED_MOVIES_START_FETCHING:
            return { ...state, isFetching: true };
        case types.RECOMMENDED_MOVIES_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.RECOMMENDED_MOVIES_SET_FETCHING_ERROR:
            return { ...state, error: payload };
        case types.RECOMMENDED_MOVIES_FILL:
            return { ...state, recommendedMovies: payload, error: null };
        default:
            return { ...state };
    }
};