import React from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';

import {useLatestFilms} from "./hooks/useFetchLatestFilms";

export const LatestFilms = () => {
    const {latestFilmDetails, isFetching, error} = useLatestFilms();

    // Table configuration
    const dataSource = [latestFilmDetails];
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

    let tableId = 0;

    const tableJSX = latestFilmDetails &&
        <Table
            dataSource={dataSource}
            columns={columns}
            rowKey={(record) => {
                if (!record.id)
                    record.id = ++tableId;
                return record.id;
            }}
            loading={isFetching}
            pagination={false}
        />;

    return (
        <>
            <h1>Latest Films</h1>
            {tableJSX}
        </>
    )
};