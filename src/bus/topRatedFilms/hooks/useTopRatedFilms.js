import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { topRatedFilmsActions } from '../actions';

export const useTopRatedFilmsFetch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(topRatedFilmsActions.fetchAsync(10));
    }, [dispatch]);

    const {
        topRatedFilms,
        isFetching,
        error
    } = useSelector((state) => state.topRatedFilms);

    return {
        topRatedFilms,
        isFetching,
        error
    }
}