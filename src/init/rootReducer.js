import { combineReducers } from 'redux';

import { topRatedFilmsReducer as topRatedFilms } from '../bus/topRatedFilms/reducer';

export const rootReducer = combineReducers({
    topRatedFilms,
});
