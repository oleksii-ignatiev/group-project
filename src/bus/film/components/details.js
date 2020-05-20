// Core
import React from "react";
import {Avatar, Descriptions, Tag} from "antd";


export const Details = ({filmDetails}) => {
    const genres = filmDetails.genres && filmDetails.genres.map(genre=>
        <Tag color="cyan" key={genre}>{genre}</Tag>
    );
    return (
        <Descriptions bordered column={3}>
            <Descriptions.Item label="Title">{filmDetails.title}</Descriptions.Item>
            <Descriptions.Item label="Release date">{filmDetails.release_date}</Descriptions.Item>
            <Descriptions.Item label="Status">{filmDetails.status}</Descriptions.Item>
            <Descriptions.Item label="Poster">
                <Avatar shape="square" size={200} src={filmDetails.poster_path} />
            </Descriptions.Item>
            <Descriptions.Item label="Overview" span={2}>{filmDetails.overview}</Descriptions.Item>
            <Descriptions.Item label="Genres">
                {genres}
            </Descriptions.Item>
            <Descriptions.Item label="Vote count">{filmDetails.vote_count}</Descriptions.Item>
            <Descriptions.Item label="Vote average">{filmDetails.vote_average}</Descriptions.Item>
        </Descriptions>
    )
};