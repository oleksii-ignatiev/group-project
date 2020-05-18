import { combineReducers } from 'redux';

import { topRatedFilmsReducer as topRatedFilms } from '../bus/topRatedFilms/reducer';
import { trendingMoviesReducer as trendingMovies } from '../bus/home/reducer';

export const rootReducer = combineReducers({
    topRatedFilms,
    trendingMovies
});
