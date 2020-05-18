//Core
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { filmDetailsActions } from '../actions';

export const useFilmDetails = () => {
    const dispatch = useDispatch();

    const {
        filmDetails,
        isFetching,
        error,
    } = useSelector((state) => state.filmDetails);


    const getFilmDetails = (moveId) => {
        dispatch(filmDetailsActions.fetchFilmDetailsAsync(moveId))
    };

    return {
        filmDetails,
        isFetching,
        error,
        getFilmDetails,
    }
};