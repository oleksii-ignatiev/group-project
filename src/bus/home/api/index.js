import { root } from './config';

export const api = Object.freeze({
    trendingMovies: {
        fetch: (time) => {
            return fetch( `${root}/trending/movie/${time}`, { 
                method: 'GET',
            })
        }
    },
});
