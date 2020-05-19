// Config
import {root} from './config';

export const api = Object.freeze({
    similarFilms: {
        // Similar Films
        fetch: (movieId) => {
            const pageLimit = 1;

            return fetch(`${root}/${movieId}/similar?page=${pageLimit}`, {
                method: 'GET'
            })
        }
    }
});
