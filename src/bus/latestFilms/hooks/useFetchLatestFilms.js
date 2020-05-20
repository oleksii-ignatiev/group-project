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
        latestFilmDetails,
        isFetching,
        error
    } = useSelector((state) => state.latestFilms);

    return {
        latestFilmDetails,
        isFetching,
        error
    }
}