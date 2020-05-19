// Core
import { combineReducers } from 'redux';

// Reducers
import { topRatedFilmsReducer as topRatedFilms } from '../bus/topRatedFilms/reducer';
import { latestFilms } from "../bus/latestFilms/redux/reducer";

export const rootReducer = combineReducers({
    topRatedFilms,
    latestFilms
});
