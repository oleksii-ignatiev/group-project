// Types
import {types} from './types';

// API
import {api} from '../api';

export const similarFilmsActions = Object.freeze({
    // Sync
    startFetching: () => {
        return {
            type: types.SIMILAR_FILMS_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.SIMILAR_FILMS_STOP_FETCHING
        }
    },
    fillSimilarFilms: (payload) => {
        return {
            type: types.SIMILAR_FILMS_FILL,
            payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.SIMILAR_FILMS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    // Async
    similarFilmsFetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.SIMILAR_FILMS_FETCH_ASYNC
        });

        dispatch(similarFilmsActions.startFetching());

        const response = await api.similarFilms.fetch();

        if (response.status === 200) {
            const results = await response.json();

            dispatch(similarFilmsActions.fillSimilarFilms(results.data));
        } else {
            const error = {
                status: response.status
            };

            dispatch(similarFilmsActions.setFetchingError(error));
        }

        dispatch(similarFilmsActions.stopFetching());
    }
});
