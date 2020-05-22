//Core
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { recommendedMoviesActions } from '../actionsRecommended';

export const useRecommendedMoviesFetch = (moveId) => {
    const dispatch = useDispatch();

    const {
        recommendedMovies,
        isFetching,
        error,
    } = useSelector((state) => state.recommendedMovies);


    const getRecommendedMovies = (moveId) => {
        dispatch(recommendedMoviesActions.fetchRecommendedMoviesAsync(moveId))
    };

    return {
        recommendedMovies,
        isFetching,
        error,
        getRecommendedMovies,
    }
};