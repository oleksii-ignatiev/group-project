// Core
import { combineReducers } from 'redux';

// Reducers
import { latestFilms} from "../bus/latestFilms/redux/reducer";

export const rootReducer = combineReducers({
    latestFilms
});
