// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import { book } from './book';

// Pages
import { PopularFilms } from '../pages/popularFilms';
import { Film } from '../pages/film';


export const Routes = () => (
    <>
        <Switch>
            <Route exact path={ book.root }>
                Hello!
            </Route>
            <Route exact path={ book.popularFilms }>
                <PopularFilms />
            </Route>
            <Route exact path={ book.film }>
                <Film />
            </Route>
        </Switch>
    </>
);