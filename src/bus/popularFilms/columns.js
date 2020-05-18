//Core
import React from "react";
import {Avatar} from "antd";

export const columns = [
    {
        title: 'Poster',
        dataIndex: 'poster_path',
        key: 'poster_path',
        render: (icon) => <Avatar shape="square" size={200} src={icon} />
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