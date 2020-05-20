// Core
import { combineReducers } from 'redux';

// Reducers
import { topRatedFilmsReducer as topRatedFilms } from '../bus/topRatedFilms/reducer';
import { trendingMoviesReducer as trendingMovies } from '../bus/home/reducer';
import { popularFilmsReducer as popularFilms } from '../bus/popularFilms/reducer';
import { filmDetailsReducer as filmDetails } from '../bus/film/reducer';
import { latestFilms } from "../bus/latestFilms/redux/reducer";
import { similarFilms } from "../components/similarFilms/redux/reducer";
import { commentsReducer as comments } from '../bus/film/components/comments/reducer';

export const rootReducer = combineReducers({
    topRatedFilms,
    trendingMovies,
    popularFilms,
    filmDetails,
    latestFilms,
    similarFilms,
    comments,
});
