// Core
import React from "react";
import {Avatar, Descriptions} from "antd";


export const Details = ({filmDetails}) => {
    return (
        <Descriptions bordered column={3}>
            <Descriptions.Item label="Title">{filmDetails.title}</Descriptions.Item>
            <Descriptions.Item label="Release date">{filmDetails.release_date}</Descriptions.Item>
            <Descriptions.Item label="Status">{filmDetails.status}</Descriptions.Item>
            <Descriptions.Item label="Poster">
                <Avatar shape="square" size={200} icon={<img src={filmDetails.poster_path} alt="img" />} />
            </Descriptions.Item>
            <Descriptions.Item label="Overview" span={2}>{filmDetails.overview}</Descriptions.Item>
            <Descriptions.Item label="Genres">
                {filmDetails.genres}
            </Descriptions.Item>
            <Descriptions.Item label="Vote count">{filmDetails.vote_count}</Descriptions.Item>
            <Descriptions.Item label="Vote average">{filmDetails.vote_average}</Descriptions.Item>
        </Descriptions>
    )
};