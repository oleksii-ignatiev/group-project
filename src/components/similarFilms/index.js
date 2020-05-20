import React, {useEffect} from "react";
import { useSimilarFilms } from "./hooks/useFetchSimilarFilms";
import { Card, Popover, Button, Empty } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

import "./styles.scss"

export const SimilarFilms = (props) => {
    const {similarFilms, getSimilarFilms} = useSimilarFilms();

    useEffect(() => getSimilarFilms(props.movieId), []);

    const limitOfFilms = 5;

    const gridStyle = {
        width: '20%',
        textAlign: 'center',
    };

    const filmCardsJSX = similarFilms.length ?
        <Card title="Similar Films">
            {similarFilms.slice(0, limitOfFilms).map((film) => (
                <Card.Grid hoverable={false} style={gridStyle} key={film.id}>
                        <span className='film-title'>
                            <b>{film.title}</b>
                        </span>

                    {film.poster_path ? <img src={film.poster_path} alt="" width={100}/> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}

                    <div>
                        <Popover content={film.overview} title={film.title}>
                            <Button type="primary">Short Description <InfoCircleOutlined /></Button>
                        </Popover>
                    </div>

                    <b>{film.release_date}</b>
                </Card.Grid>
            ))}
        </Card>
        : <div className='error'>Similar Films not found!</div>

    return (
        <>
            {filmCardsJSX}
        </>
    )
}