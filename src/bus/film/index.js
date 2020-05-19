//Core
import React, {useEffect} from 'react';
import { Spin, Space } from 'antd';
import { useParams } from 'react-router-dom';

// Styles
import 'antd/dist/antd.css';
import '../popularFilms/styles.css';

// Hooks
import { useFilmDetails } from './hooks/useFilmDetails';

//Components
import { AdditionalDetails } from './components/additionalDetails';
import { Details } from './components/details';
import {SimilarFilms} from "../../components/similarFilms";

export const Film = () => {
    const { id } = useParams();
    const { getFilmDetails, filmDetails, isFetching, error } = useFilmDetails();

    useEffect(() => getFilmDetails(id), []);


    if (error && error.status === 404) {
        return <p>Not found!</p>
    }
    if (error && error.status !== 404) {
        return <p>Something went wrong...</p>
    }

    const spinnerJSX = isFetching && (
        <div className="spinContainer">
            <Space>
                <Spin size="large" />
            </Space>
        </div>
    );

    const detailsJSX = !isFetching && filmDetails && (
        <>
            <Details filmDetails={filmDetails} />
            <AdditionalDetails filmDetails={filmDetails} />
        </>
    );

    return (
        <div className="container">
            <h2>Film details</h2>
            {detailsJSX}
            {spinnerJSX}
            <SimilarFilms
                movieId = {id}
            />
        </div>
    )
};