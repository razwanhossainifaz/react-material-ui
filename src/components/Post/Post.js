import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './Post.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 5000,
    },
});

const Post = (props) => {
    const classes = useStyles();
    const {id , title , body} = props.post
    const history = useHistory();
    const handleClick = (postId) => {
        const url = `/posts/${postId}`
        history.push(url);
    }
    return (
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
                    <CardActions>
                        <Button onClick = {() => handleClick(id)} size="small" variant="contained" color="secondary">
                            See Details
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Post;