import React from 'react';
import { useParams } from 'react-router-dom';
import './Comment.css';

const Comment = (props) => {
    const {postId} = useParams();
    const {id , name , email , body} = props.comment;
    return (
        <div className = "comment-style">
            <div>
                <img className = "comment-img-style" src={`https://randomuser.me/api/portraits/med/men/${postId}.jpg`} alt=""/>
            </div>
            <div className = "comment-detail-style">
                <h2>Name : {name}</h2>
                <h2>Email : {email}</h2>
                <h2>Review : {body}</h2>
            </div>
        </div>
    );
};

export default Comment;