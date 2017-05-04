import * as React from 'react';
import { Route } from 'react-router-dom';

import { App } from './components/App';
import { HomePage } from './components/home/HomePage';
import { TodoPage } from './components/todo/TodoPage';
import { AboutPage } from './components/about/AboutPage';
import { AlbumPage } from './components/album/AlbumPage';
import { NotFoundPage } from './components/notfound/NotFoundPage';

export default (
  <Route path='/' component={App as any}>
    <Route component={HomePage}/>
    <Route path='todo' component={TodoPage}/>
    <Route path='about' component={AboutPage}/>
    <Route path='album' component={AlbumPage}/>
    <Route path='*' component={NotFoundPage}/>
  </Route>
);
