// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import { book } from './book';

// Pages
import { PopularFilms } from '../pages/popularFilms';


export const Routes = () => (
    <>
        <Switch>
            <Route exact path={ book.root }>
                Hello!
            </Route>
            <Route exact path={ book.popularFilms }>
                <PopularFilms />
            </Route>
        </Switch>
    </>
);