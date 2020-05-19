// Core
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Actions
import {latestFilmsActions} from "../redux/actions";

export const useLatestFilms = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(latestFilmsActions.latestFilmsFetchAsync());
    }, [dispatch]);


    const {
        latestFilms,
        isFetching,
        error
    } = useSelector((state) => state.latestFilms);

    return {
        latestFilms,
        isFetching,
        error
    }
}