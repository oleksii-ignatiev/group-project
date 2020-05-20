// Types
import { types } from './types';

const initialState = {
    comments: [],
    isFetching: false,
    error: null,
};


export const commentsReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case types.COMMENTS_START_FETCHING:
            return { ...state, isFetching: true };
        case types.COMMENTS_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.COMMENTS_SET_FETCHING_ERROR:
            return { ...state, error: payload, comments: [] };
        case types.COMMENTS_FILL:
            return { ...state, comments: payload, error: null };
        default:
            return state;
    }
};