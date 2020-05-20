import { types } from './types';

const initialState = {
    trendingMovies: [],
    isFetching: false,
    error: false
};

export const trendingMoviesReducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case types.TRENDING_MOVIES_START_FETCHING:
            return { ...state, isFetching: true };
        case types.TRENDING_MOVIES_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.TRENDING_MOVIES_SET_FETCHING_ERROR:
            return { ...state, error: payload, trendingMovies: [] };
        case types.TRENDING_MOVIES_FILL:
            return { ...state, trendingMovies: payload, error: false }
        default:
            return { ...state };
    }
};
