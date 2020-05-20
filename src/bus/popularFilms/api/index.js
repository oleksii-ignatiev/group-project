// Config
import { root } from './config';

export const api = Object.freeze({
    getPopularMovies: {
        fetch: (page) => {
            return fetch(`${root}/popular-movies?page=${page}`, {
                method: 'GET'
            })
        }
    },
});