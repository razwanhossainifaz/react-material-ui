import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import './Home.css';

const Home = () => {
    const [posts , setPosts] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    } , [])
    return (
        <div className="home-style">
            <h1 className="head-style">Total post : {posts.length}</h1>
            {
                posts.map(post => <Post post = {post}></Post>)
            }
        </div>
    );
};

export default Home;