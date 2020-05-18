//Core
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { popularFilmsActions } from '../actions';

export const usePopularFilms = () => {
    const dispatch = useDispatch();

    const {
        popularFilms,
        isFetching,
        error,
    } = useSelector((state) => state.popularFilms);

    const getPopularFilms = () => {
        dispatch(popularFilmsActions.fetchAsync());
    };

    return {
        popularFilms,
        getPopularFilms,
        isFetching,
        error,
    }
};