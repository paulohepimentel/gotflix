import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoRegistration from './pages/Register/Video';
import CategoryRegistration from './pages/Register/Category';
import Page404 from './pages/404Pag';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={VideoRegistration} />
      <Route path="/cadastro/categoria" component={CategoryRegistration} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
