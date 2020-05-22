import { types} from './typesRecommended';

import { api } from './api';

export const recommendedMoviesActions = Object.freeze({
    
    startFetching: () => {
        return {
            type: types.RECOMMENDED_MOVIES_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.RECOMMENDED_MOVIES_STOP_FETCHING,
        }
    },
    fill: (payload) => {
        return {
            type: types.RECOMMENDED_MOVIES_FILL,
            payload,
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.RECOMMENDED_MOVIES_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    
    fetchRecommendedMoviesAsync: (movieId) => async (dispatch) => {
        dispatch({
            type: types.RECOMMENDED_MOVIES_FETCH_ASYNC,
        });

        dispatch(recommendedMoviesActions.startFetching());

        const response = await api.getRecommendedMovies.fetch(movieId);

        if (response.status === 200) {

            const results = await response.json();

            dispatch(recommendedMoviesActions.fill(results.data));
        } else {
            const error = {
                status: response.status
            };

            dispatch(recommendedMoviesActions.setFetchingError(error));
        }

        dispatch(recommendedMoviesActions.stopFetching());
    }
});