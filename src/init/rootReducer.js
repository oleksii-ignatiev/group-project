import { combineReducers } from 'redux';

import { topRatedFilmsReducer as topRatedFilms } from '../bus/topRatedFilms/reducer';
import { trendingMoviesReducer as trendingMovies } from '../bus/home/reducer';
import { popularFilmsReducer as popularFilms } from '../bus/popularFilms/reducer';
import { filmDetailsReducer as filmDetails } from '../bus/film/reducer';

export const rootReducer = combineReducers({
    topRatedFilms,
    trendingMovies,
    popularFilms,
    filmDetails
});
