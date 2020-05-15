import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { topRatedFilmsActions } from '../actions';
import { store } from '../../../init/store';

export const useTopRatedFilmsFetch = () => {
    
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(topRatedFilmsActions.fetchAsync(10));
        }, [dispatch]);

        const getFilms = () => store.getState().topRatedFilms.topRatedFilms;

        const {
            isFetching,
            error
        } = useSelector((state) => state.topRatedFilms);
        

    return {
        getFilms,
        isFetching,
        error
    }
}