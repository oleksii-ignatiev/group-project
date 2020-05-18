// Core
import { combineReducers } from 'redux';

// Reducers
import { topRatedFilmsReducer as topRatedFilms } from '../bus/topRatedFilms/reducer';
import { popularFilmsReducer as popularFilms } from '../bus/popularFilms/reducer';

export const rootReducer = combineReducers({
    topRatedFilms,
    popularFilms,
});
