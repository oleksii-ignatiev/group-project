import { types } from './types';

import { api } from '../../api';

export const topRatedFilmsActions = Object.freeze({

    startFetching: () => {
        return {
            type: types.TOP_RATED_FILMS_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.TOP_RATED_FILMS_STOP_FETCHING
        }
    },
    fill: (payload) => {
        return {
            type: types.TOP_RATED_FILMS_FILL,
            payload: payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.TOP_RATED_FILMS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },

    fetchAsync: (page) => async (dispatch) => {
        dispatch({
            type: types.TOP_RATED_FILMS_FETCH_ASYNC
        });

        dispatch(topRatedFilmsActions.startFetching());

        const response = await api.topRatedFilms.fetch(page)
    
        if (response.status === 200) {
            const results = await response.json();

            dispatch(topRatedFilmsActions.fill(results.data));
        } else {
            const error = {
                status: response.status
            };

            dispatch(topRatedFilmsActions.setFetchingError(error));
        }
        dispatch(topRatedFilmsActions.stopFetching());
    }
});
