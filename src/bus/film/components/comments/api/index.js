// Config
import { root } from './config';

export const api = Object.freeze({
    getComments: {
        fetch: (movieId) => {
            return fetch(`${root}/${movieId}/reviews`, {
                method: 'GET'
            })
        }
    },
});