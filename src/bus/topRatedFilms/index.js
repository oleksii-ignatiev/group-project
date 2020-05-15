import React from 'react';
import { Table, Tag } from 'antd';
import 'antd/dist/antd.css';
import './custom.css';


import { useTopRatedFilmsFetch } from './hooks/useTopRatedFilms';

export const TopRatedFilms = () => {
    const { getFilms, isFetching,  error } = useTopRatedFilmsFetch();
    const topRatedFilms = getFilms();
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
            <Table columns={columns} dataSource={topRatedFilms} />
        </>
    )
}
