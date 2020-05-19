// Config
import { root } from './config';

export const api = Object.freeze({
    getComments: {
        fetch: (movieId, page) => {
            return fetch(`${root}/${movieId}/reviews?page=${page}`, {
                method: 'GET'
            })
        }
    },
});