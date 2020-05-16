// Core
import React from "react";
import {Switch, Route} from "react-router-dom";

// Routes
import {book} from "./book";

// Pages
import { LatestFilms } from "../pages/latestFilms";


export const Routes = () => {
    return (
        <Switch>
            <Route exact path={book.latestFilms}>
                <LatestFilms/>
            </Route>
        </Switch>
    )
}