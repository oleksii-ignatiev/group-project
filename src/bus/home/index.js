import React, { useEffect, useState } from 'react';
import { Tabs, Card } from 'antd';
import {Link} from "react-router-dom";

import 'antd/dist/antd.css';
import './custom.scss';

import { useTrendingMovies } from './hooks/useTrendingMovies';

export const Home = () => {
    const { TabPane } = Tabs;

    const { getTrendingMovies, trendingMovies, error } = useTrendingMovies();
    
    const [time, setTime] = useState('day');
    const tabs = ["Today", "Week"];
    
    useEffect(() => {
        getTrendingMovies(time);
    }, [time]);

    let errorJSX;
    if (error && error.status === 404) {
        errorJSX = <p>Not found!</p>
    }

    if (error && error.status !== 404) {
        errorJSX = <p>Something went wrong...</p>
    }

    const moviesJSX = trendingMovies.map( (movie) =>
        <Card title = { movie.title } key = { movie.id } >
            <Link to={{ pathname: `/film/${movie.id}` }}>
                <img src = { movie.poster_path } alt="poster"/>
            </Link>
            <p>{ movie.overview }</p>
            <p>{ movie.release_year }</p>
        </Card>
    )
    return (
        <>
            <h1>Trending movies</h1>
            <Tabs defaultActiveKey="1" onChange={ key => setTime(key === "1" ? 'day' : 'week') }>
                { tabs.map( (tab, index) => 
                    <TabPane tab = { tab } key = { index + 1 }>
                        { moviesJSX }
                        { errorJSX }
                    </TabPane>
                )}
            </Tabs>
        </>
    )
};