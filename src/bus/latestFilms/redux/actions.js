// Types
import {types} from './types';

// API
import {api} from '../api';

export const latestFilmsActions = Object.freeze({
    // Sync
    startFetching: () => {
        return {
            type: types.LATEST_FILMS_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.LATEST_FILMS_STOP_FETCHING
        }
    },
    fillLatestFilms: (payload) => {
        return {
            type: types.LATEST_FILMS_FILL,
            payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.LATEST_FILMS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    // Async
    latestFilmsFetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.LATEST_FILMS_FETCH_ASYNC
        });

        dispatch(latestFilmsActions.startFetching());

        const response = await api.latestFilms.fetch();

        if (response.status === 200) {
            const results = await response.json();

            dispatch(latestFilmsActions.fillLatestFilms(results.data));
        } else {
            const error = {
                status: response.status
            };

            dispatch(latestFilmsActions.setFetchingError(error));
        }

        dispatch(latestFilmsActions.stopFetching());
    }
});
