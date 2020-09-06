import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './PostDetail.css';
import Comment from '../Comment/Comment';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const PostDetail = () => {
    const {postId} = useParams();
    const classes = useStyles();
    const [post , setPost] = useState([])
    const [comments , setComments] = useState([]);
    const {id , title , body} = post;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    } , [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    } , [])
    return (
        <div className="postDetail-style">
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root} className="card-style">
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                      Title : {title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                      Body : {body}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div className="comment-head-style">
                <h1>Comments</h1>
            </div>
            {
                comments.map(comment => <Comment comment = {comment} key = {id}></Comment>)
            }
        </div>
    );
};

export default PostDetail;