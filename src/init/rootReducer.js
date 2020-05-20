// Core
import { combineReducers } from 'redux';

// Reducers
import { topRatedFilmsReducer as topRatedFilms } from '../bus/topRatedFilms/reducer';
import { popularFilmsReducer as popularFilms } from '../bus/popularFilms/reducer';
import { filmDetailsReducer as filmDetails } from '../bus/film/reducer';
import { latestFilms } from "../bus/latestFilms/redux/reducer";
import { similarFilms } from "../components/similarFilms/redux/reducer";

export const rootReducer = combineReducers({
    topRatedFilms,
    popularFilms,
    filmDetails,
    latestFilms,
    similarFilms
});
