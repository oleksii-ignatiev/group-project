//Core
import React, {useEffect} from 'react';
import { Table, Spin, Space } from 'antd';
// Styles
import 'antd/dist/antd.css';
import './styles.css';

// Hooks
import { usePopularFilms } from './hooks/usePopularFilms';

// Others
import { columns } from './columns';


export const PopularFilms = () => {
    const { popularFilms, getPopularFilms, isFetching, error } = usePopularFilms();
    useEffect(() => getPopularFilms(), []);

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

    const tableJSX = !isFetching && popularFilms && (
        <Table dataSource={popularFilms} columns={columns} />
    );

    return (
        <div className="container">
            <h2>Most popular films</h2>
            {tableJSX}
            {spinnerJSX}
        </div>
    )
};