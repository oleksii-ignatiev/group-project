//Types
import { types} from './types';

//API
import { api } from './api';

export const commentsActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.COMMENTS_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.COMMENTS_STOP_FETCHING,
        }
    },
    fill: (payload) => {
        return {
            type: types.COMMENTS_FILL,
            payload,
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.COMMENTS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    //Async
    fetchCommentsAsync: (movieId) => async (dispatch) => {
        dispatch({
            type: types.COMMENTS_FETCH_ASYNC,
        });

        dispatch(commentsActions.startFetching());

        const response = await api.getComments.fetch(movieId);

        if (response.status === 200) {

            const results = await response.json();

            dispatch(commentsActions.fill(results.data));
        } else {
            const error = {
                status: response.status
            };

            dispatch(commentsActions.setFetchingError(error));
        }

        dispatch(commentsActions.stopFetching());
    }
});