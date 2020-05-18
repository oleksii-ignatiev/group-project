import React, { useEffect, useState } from 'react';
import { Tabs, Card } from 'antd';

import 'antd/dist/antd.css';
import './custom.scss';

import { useTrendingMovies } from './hooks/useTrendingMovies';

export const Home = () => {
    const { TabPane } = Tabs;

    const { getTrendingMovies, trendingMovies } = useTrendingMovies();
    
    const [time, setTime] = useState('day');
    
    useEffect(() => {
        getTrendingMovies(time);
    }, [time]);

    const moviesJSX = trendingMovies.map( (movie) =>
        <Card title = { movie.title } key = { movie.id } >
            <img src = { movie.poster_path } alt="poster"/>
            <p>{ movie.overview }</p>
            <p>{ movie.release_year }</p>
        </Card>
    )
    return (
        <>
            <h1>Trending movies</h1>
            <Tabs defaultActiveKey="1" onChange={ key => setTime(key === "1" ? 'day' : 'week') }>
                <TabPane tab="Today" key="1">
                    { moviesJSX }
                </TabPane>
                <TabPane tab="Week" key="2" >
                    { moviesJSX }
                </TabPane>
            </Tabs>
        </>
    )
};