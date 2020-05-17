// Types
import { types } from './types';

const initialState = {
    popularFilms: [],
    isFetching: false,
    error: null,
};

const addKey = (dataFilms) => dataFilms.map(film => film && {...film, key: film.title} );

export const popularFilmsReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case types.POPULAR_FILMS_START_FETCHING:
            return { ...state, isFetching: true };
        case types.POPULAR_FILMS_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.POPULAR_FILMS_SET_FETCHING_ERROR:
            return { ...state, error: payload, popularFilms: [] };
        case types.POPULAR_FILMS_FILL:
            return { ...state, popularFilms: addKey(payload), error: null };
        default:
            return state;
    }
};