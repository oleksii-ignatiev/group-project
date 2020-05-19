// Core
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Routes
import { book } from './book';

// Pages
import { Home } from '../pages/home';
import { TopRatedFilms } from '../pages/topRatedFilms';
import { LatestFilms } from "../pages/latestFilms";

export const Routes = () => {

    return (
        <>
            <Switch>
                <Route exact path={ book.root }>
                    <Home />
                </Route>
                <Route exact path={ book.topRatedFilms }>
                    <TopRatedFilms />
                </Route>
                <Route exact path={ book.films }>
                    <Redirect to={ book.topRatedFilms } />
                </Route>
                <Route exact path={book.latestFilms}>
                    <LatestFilms/>
                </Route>
            </Switch>
        </>
    )
}
