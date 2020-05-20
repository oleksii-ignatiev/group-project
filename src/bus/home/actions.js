import { types } from './types';

import { api } from './api';

export const trendingMoviesActions = Object.freeze({

    startFetching: () => {
        return {
            type: types.TRENDING_MOVIES_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.TRENDING_MOVIES_STOP_FETCHING
        }
    },
    fill: (payload) => {
        return {
            type: types.TRENDING_MOVIES_FILL,
            payload: payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.TRENDING_MOVIES_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },

    fetchAsync: (time) => async (dispatch) => {
        dispatch({
            type: types.TRENDING_MOVIES_FETCH_ASYNC
        });

        dispatch(trendingMoviesActions.startFetching());

        const response = await api.trendingMovies.fetch(time);
    
        if (response.status === 200) {
            const results = await response.json();

            dispatch(trendingMoviesActions.fill(results.data));
        } else {
            const error = {
                status: response.status
            };

            dispatch(trendingMoviesActions.setFetchingError(error));
        }
        dispatch(trendingMoviesActions.stopFetching());
    }
});
