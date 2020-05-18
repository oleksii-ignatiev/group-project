// Config
import { root } from './config';

export const api = Object.freeze({
    getPopularMovies: {
        fetch: () => {
            return fetch(`${root}/popular-movies`, {
                method: 'GET'
            })
        }
    },
});