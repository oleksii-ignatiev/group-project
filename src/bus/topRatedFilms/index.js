import React, { useEffect } from 'react';
import { Table, Tag } from 'antd';
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';

import './custom.css';
import { useTopRatedFilms } from './hooks/useTopRatedFilms';

export const TopRatedFilms = () => {
    const { getTopRatedFilms, topRatedFilms } = useTopRatedFilms();
    useEffect(() => {
        getTopRatedFilms();
    }, []);

    const columns = [
        {
          title: 'Poster',
          dataIndex: 'poster_path',
          key: 'poster_path',
          render: text => <img src={text} alt="poster"/>,
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
            render: (text, row) => (
                <Link to={{
                    pathname: `/film/${row.id}`
                }}>
                    {text}
                </Link>
            )
        },
        {
          title: 'Release Date',
          dataIndex: 'release_date',
          key: 'release_date',
        },
        {
            title: 'Vote Count',
            dataIndex: 'vote_count',
            key: 'vote_count',
        },
        {
            title: 'Vote Avarage',
            dataIndex: 'vote_average',
            key: 'vote_average',
        },
        {
            title: 'Description',
            dataIndex: 'overview',
            key: 'overview',
        },
        
        {
          title: 'Genres',
          key: 'genres',
          dataIndex: 'genres',
          render: genres => (
            <>
              {genres.map(genre => {
                let color = genre.length > 5 ? 'geekblue' : 'green';
                if (genre === 'Romance') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={genre}>
                    {genre.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        
      ];  
    return (
        <>
            <h1>Top Rated Films</h1>
            <Table columns={columns} dataSource={topRatedFilms} rowKey='id' />
        </>
    )
}
