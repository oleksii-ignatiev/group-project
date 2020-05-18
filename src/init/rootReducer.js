// Core
import { combineReducers } from 'redux';

// Reducers
import { latestFilms } from "../bus/latestFilms/redux/reducer";
import { similarFilms } from "../components/similarFilms/redux/reducer";

export const rootReducer = combineReducers({
    latestFilms,
    similarFilms
});
