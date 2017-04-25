import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createAppStore } from './store';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import todoApp from './reducers';
import { App } from './components/App';

import * as io from 'socket.io-client';
import { Todo } from './models/Todo';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';


let store = createAppStore();

let history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>, document.getElementById('app')
);
