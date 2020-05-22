// Config
import { root } from './config';

export const api = Object.freeze({
    getFilmDetails: {
        fetch: (movieId) => {
            return fetch(`${root}/movie-details/${movieId}`, {
                method: 'GET'
            })
        }
    },
    getRecommendedMovies: {
        fetch: (movieId) => {
            return fetch(`${root}/${movieId}/recommendations?page=5`, {
                method: 'GET'
            })
        }
    },
});