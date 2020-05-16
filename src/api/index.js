// Config
import {root} from './config';

export const api = Object.freeze({
    latestFilms: {
        // Latest Films
        fetch: (films) => {
            return fetch(`${root}/latest-movie`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(films)
            })
        }
    }
});
