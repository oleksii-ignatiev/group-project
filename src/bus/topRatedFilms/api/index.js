import { root } from './config';

export const api = Object.freeze({
    topRatedFilms: {
        fetch: (page) => {
            return fetch( `${root}/top-rated?page=${page}`, { 
                method: 'GET',
            })
        }
    },
});
