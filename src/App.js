import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import BlogPost from './components/BlogPost';
import AboutPage from './components/AboutPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/post/:id" component={BlogPost} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
