//Core
import React from "react";
import {Avatar} from "antd";
import { Link } from "react-router-dom";

export const columns = [
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
        render: (title, item) => <Link to={`/film/${item.id}`}>{title}</Link>
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