import React, { useEffect, useState } from 'react';
import { Rate , Card } from 'antd';

import 'antd/dist/antd.css';
import './custom.scss';

import { useRecommendedMoviesFetch } from '../hooks/useRecommendedMoviesFetch';

export const RecommendedMovies = (props) => {
    const { getRecommendedMovies, recommendedMovies } = useRecommendedMoviesFetch();
    
       
    useEffect(() => {
        getRecommendedMovies(props.id);
    },[]);

    return (
        <>
            <h2>Recommended Movies</h2>
            {(recommendedMovies.length) ?
                <div className="recommended">  
                    { recommendedMovies.slice(0,5).map( (movie) =>
                        <Card title = { movie.title } key = { movie.id } >
                            <img src = { movie.poster_path } alt="poster"/>
                            <p>{ movie.overview }</p>
                            <p>{ movie.release_date }</p>
                            <Rate 
                                tooltips = { Array(Math.round(movie.popularity/10)).fill(movie.popularity, 0, 9) } 
                                count = { 10 } 
                                defaultValue = { ( Math.round(movie.popularity/10)-Math.floor(movie.popularity/10) ) ? Math.floor(movie.popularity/10) + 0.5 : Math.floor(movie.popularity/10) } 
                                allowHalf 
                                disabled />
                        </Card>
                    ) }
                </div> : <p>No recommended movies found</p>}
        </>
    )
};