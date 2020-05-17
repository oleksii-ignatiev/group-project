import { useSelector, useDispatch } from 'react-redux';

import { topRatedFilmsActions } from '../actions';

export const useTopRatedFilms = () => {
    const dispatch = useDispatch();
    
    const {
        topRatedFilms,
    } = useSelector((state) => state.topRatedFilms);

    const getTopRatedFilms = () => {
        
        dispatch(topRatedFilmsActions.fetchAsync(10));
    }

    return {
        getTopRatedFilms,
        topRatedFilms
    }
}