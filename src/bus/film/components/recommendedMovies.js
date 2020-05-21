import React, { useEffect, useState } from 'react';
import { Rate , Card } from 'antd';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import './custom.scss';

import { useRecommendedMoviesFetch } from '../hooks/useRecommendedMoviesFetch';

export const RecommendedMovies = (props) => {
    const { getRecommendedMovies, recommendedMovies } = useRecommendedMoviesFetch();
    
       
    useEffect(() => {
        getRecommendedMovies(props.id);
    },[props.id]);

    const getStarsQuantity = (number) => {
        const numberOfTens = Math.floor(number/10);
        const roundedNumberOfTens = Math.round(number/10)
        return ( roundedNumberOfTens - numberOfTens ) ? numberOfTens + 0.5 : numberOfTens
    }
    const getRecommendedMoviesJSX = (movies) => {
        return (movies.length) ?
        <div className="recommended">  
            { movies.slice(0,5).map( (movie) =>
                <Card title = { movie.title } key = { movie.id } >
                    <Link to={`/film/${movie.id}`} >
                        <img src = { movie.poster_path } alt="poster"/>
                    </Link>
                    <p>{ movie.overview }</p>
                    <p>{ movie.release_date }</p>
                    <Rate 
                        tooltips = { Array(Math.round(movie.popularity/10)).fill(movie.popularity, 0, 9) } 
                        count = { 10 } 
                        defaultValue = { getStarsQuantity(movie.popularity) } 
                        allowHalf 
                        disabled 
                    />
                </Card>
            ) }
        </div> : <p>No recommended movies found</p>
    }

    return (
        <>
            <h2>Recommended Movies</h2>
            { getRecommendedMoviesJSX(recommendedMovies) }
        </>
    )
};