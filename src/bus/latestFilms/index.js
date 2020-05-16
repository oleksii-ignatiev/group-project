import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';

import {useLatestFilms} from "./hooks/useFetchLatestFilms";

export const LatestFilms = () => {
    const {latestFilms, isFetching, error} = useLatestFilms();

    // Table configuration
    const dataSource = [latestFilms];
    const columns = [
        {
            title: 'Постер',
            dataIndex: 'poster_path',
            key: 'poster_path',
            render: text => <img src={text} width={100} alt='' />
        },
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Дата релиза',
            dataIndex: 'release_date',
            key: 'release_date',
        },
        {
            title: 'Доходность',
            dataIndex: 'revenue',
            key: 'revenue',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Популярность',
            dataIndex: 'popularity',
            key: 'popularity',
        },
        {
            title: 'Короткое описание',
            dataIndex: 'overview',
            key: 'overview',
        }
    ];

    // JSX
    if (error && error.status === 404) {
        return <p>Not found!</p>
    }

    if (error && error.status !== 404) {
        return <p>Something went wrong...</p>
    }

    const spinnerJSX = isFetching && (
        <p>Loading data from API...</p>
    );

    const tableJSX = !isFetching && latestFilms && <Table dataSource={dataSource} columns={columns} />;

    return (
        <>
            <h1>Latest Films</h1>
            {spinnerJSX}
            {tableJSX}
        </>
    )
};