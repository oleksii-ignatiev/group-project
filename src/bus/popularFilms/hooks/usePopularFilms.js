//Core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { popularFilmsActions } from '../actions';

export const usePopularFilms = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(popularFilmsActions.fetchAsync());
    }, [dispatch]);

    const {
        popularFilms,
        isFetching,
        error,
    } = useSelector((state) => state.popularFilms);

    return {
        popularFilms,
        isFetching,
        error,
    }
};