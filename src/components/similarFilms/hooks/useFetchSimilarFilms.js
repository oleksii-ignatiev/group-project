// Core
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Actions
import {similarFilmsActions} from "../redux/actions";

export const useSimilarFilms = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(similarFilmsActions.similarFilmsFetchAsync());
    }, [dispatch]);


    const {
        similarFilms,
        isFetching,
        error
    } = useSelector((state) => state.similarFilms);

    return {
        similarFilms,
        isFetching,
        error
    }
}