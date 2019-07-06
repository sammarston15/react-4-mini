import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import routes from './routes';
import Home from './Components/Home/Home';
import TopicList from './Components/TopicList/TopicList';
import Post from './Components/Post/Post';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/topics' component={TopicList} />
            <Route path='/post/:id' component={Post} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
