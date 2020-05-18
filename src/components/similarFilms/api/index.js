// Config
import {root} from './config';

export const api = Object.freeze({
    similarFilms: {
        // Similar Films
        fetch: (films, /*movieId*/) => {
            const pageLimit = 5;
            const movieId = '419704';

            return fetch(`${root}/${movieId}/similar?page=${pageLimit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(films)
            })
        }
    }
});
