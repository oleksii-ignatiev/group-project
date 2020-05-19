//Core
import React, {useEffect} from 'react';
import { Comment, Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// Styles
import 'antd/dist/antd.css';
import './styles.css';
// Hooks
import { useComments } from './hooks/useComments';



export const Comments = ({id}) => {
    const { getComments, comments, isFetching, error } = useComments();

    useEffect(() => getComments(id), []);


    if (error && error.status === 404) {
        return <p>Not found!</p>
    }
    if (error && error.status !== 404) {
        return <p>Something went wrong...</p>
    }


    const commentsJSX = !isFetching && comments && comments.map(comment => (
            <Comment
                key={comment.id}
                author={<p>{comment.author}</p>}
                avatar={
                    <Avatar
                        size="large"
                        icon={<UserOutlined />}
                    />
                }
                content={<p className="commentText">{comment.content}</p>}
            />
    ));

    return (
        <Card title="Comments">
            <div className="commentsContainer">
                {commentsJSX}
            </div>
       </Card>
    )
};