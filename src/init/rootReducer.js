// Core
import { combineReducers } from 'redux';

// Reducers
import { popularFilmsReducer as popularFilms } from '../bus/popularFilms/reducer';
import { filmDetailsReducer as filmDetails } from '../bus/film/reducer';

export const rootReducer = combineReducers({
    popularFilms,
    filmDetails,
});
