//Core
import React from 'react';
import { Table, Avatar } from 'antd';
import 'antd/dist/antd.css';

// Hooks
import { usePopularFilms } from './hooks/usePopularFilms';

const columns = [
    {
        title: 'Poster',
        dataIndex: 'poster_path',
        key: 'poster_path',
        render: (icon) => <Avatar shape="square" size={200} icon={<img src={icon} alt="img" />} />
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Popularity',
        dataIndex: 'popularity',
        key: 'popularity',
    },
    {
        title: 'Vote count',
        dataIndex: 'vote_count',
        key: 'vote_count',
    },
    {
        title: 'Vote average',
        dataIndex: 'vote_average',
        key: 'vote_average',
    },
    {
        title: 'Overview',
        dataIndex: 'overview',
        key: 'overview',
    },
];

export const PopularFilms = () => {
    const { popularFilms } = usePopularFilms();
    return (
        <>
            <h2>Most popular films</h2>
            <Table dataSource={popularFilms} columns={columns} />;
        </>
    )
};