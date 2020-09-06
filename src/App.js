import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';
import NoMatch from './components/NoMatch/NoMatch'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Home></Home>
        </Route>
        <Route path = '/home'>
          <Home></Home>
        </Route>
        <Route path = '/posts/:postId'>
          <PostDetail></PostDetail>
        </Route>
        <Route path = "*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
