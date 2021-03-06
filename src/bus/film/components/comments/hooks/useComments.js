//Core
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { commentsActions } from '../actions';

export const useComments = () => {
    const dispatch = useDispatch();

    const {
        comments,
        isFetching,
        error,
    } = useSelector((state) => state.comments);


    const getComments = (moveId, page=1) => {
        dispatch(commentsActions.fetchCommentsAsync(moveId, page))
    };

    return {
        comments,
        isFetching,
        error,
        getComments,
    }
};