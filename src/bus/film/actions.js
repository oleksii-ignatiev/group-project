//Types
import { types} from './types';

//API
import { api } from './api';

export const filmDetailsActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.FILM_DETAILS_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.FILM_DETAILS_STOP_FETCHING,
        }
    },
    fill: (payload) => {
        return {
            type: types.FILM_DETAILS_FILL,
            payload,
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.FILM_DETAILS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    //Async
    fetchFilmDetailsAsync: (movieId) => async (dispatch) => {
        dispatch({
            type: types.FILM_DETAILS_FETCH_ASYNC,
        });

        dispatch(filmDetailsActions.startFetching());

        const response = await api.getFilmDetails.fetch(movieId);

        if (response.status === 200) {

            const results = await response.json();

            dispatch(filmDetailsActions.fill(results.data));
        } else {
            const error = {
                status: response.status
            };

            dispatch(filmDetailsActions.setFetchingError(error));
        }

        dispatch(filmDetailsActions.stopFetching());
    }
});