//Types
import { types} from './types';

//API
import { api } from './api';

export const popularFilmsActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.POPULAR_FILMS_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.POPULAR_FILMS_STOP_FETCHING,
        }
    },
    fill: (payload) => {
        return {
            type: types.POPULAR_FILMS_FILL,
            payload,
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.POPULAR_FILMS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    //Async
    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.POPULAR_FILMS_FETCH_ASYNC,
        });

        dispatch(popularFilmsActions.startFetching());

        const response = await api.getPopularMovies.fetch();

        if (response.status === 200) {

            const results = await response.json();

            dispatch(popularFilmsActions.fill(results.data));
        } else {
            const error = {
                status: response.status
            };

            dispatch(popularFilmsActions.setFetchingError(error));
        }

        dispatch(popularFilmsActions.stopFetching());
    }
});