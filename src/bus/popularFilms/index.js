//Core
import React from 'react';
import { Table } from 'antd';
// Styles
import 'antd/dist/antd.css';
import './styles.css';

// Hooks
import { usePopularFilms } from './hooks/usePopularFilms';

// Others
import { columns } from './columns';


export const PopularFilms = () => {
    const { popularFilms } = usePopularFilms();
    return (
        <div className="container">
            <h2>Most popular films</h2>
            <Table dataSource={popularFilms} columns={columns} />;
        </div>
    )
};