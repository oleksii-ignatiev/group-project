// Core
import { combineReducers } from 'redux';

// Reducers
import { popularFilmsReducer as popularFilms } from '../bus/popularFilms/reducer';

export const rootReducer = combineReducers({
    popularFilms,
});
