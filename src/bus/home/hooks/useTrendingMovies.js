import { useSelector, useDispatch } from 'react-redux';

import { trendingMoviesActions } from '../actions';

export const useTrendingMovies = () => {
    const dispatch = useDispatch();
    
    const {
        trendingMovies,
    } = useSelector((state) => state.trendingMovies);

    const getTrendingMovies = (time) => {
        
        dispatch(trendingMoviesActions.fetchAsync(time));
    }

    return {
        getTrendingMovies,
        trendingMovies
    }
}