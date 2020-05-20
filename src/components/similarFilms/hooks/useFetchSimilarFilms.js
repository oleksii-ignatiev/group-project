// Core
import {useSelector, useDispatch} from 'react-redux';

// Actions
import {similarFilmsActions} from "../redux/actions";

export const useSimilarFilms = () => {
    const dispatch = useDispatch();

    const getSimilarFilms = (movieId) => {
        dispatch(similarFilmsActions.similarFilmsFetchAsync(movieId));
    };

    const {
        similarFilms,
        isFetching,
        error
    } = useSelector((state) => state.similarFilms);

    return {
        getSimilarFilms,
        similarFilms,
        isFetching,
        error
    }
}