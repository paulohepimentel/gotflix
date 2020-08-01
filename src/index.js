import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddVideo from './pages/Add/Video';
import AddCategory from './pages/Add/Category';
import Page404 from './pages/404Pag';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add/video" component={AddVideo} />
      <Route path="/add/category" component={AddCategory} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
