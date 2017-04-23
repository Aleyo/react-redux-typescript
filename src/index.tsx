import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createAppStore } from './store';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import todoApp from './reducers';
import { App } from './components/App';
import { HomePage } from './components/home/HomePage';
import { TodoPage } from './components/todo/TodoPage';
import { AboutPage } from './components/about/AboutPage';
import { NotFoundPage } from './components/notfound/NotFoundPage';

import { loadTodos, addTodoSuccess, toggleTodoSuccess } from './actions/';
import * as io from 'socket.io-client';
import { Todo } from './models/Todo';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';


let store = createAppStore();

let history = createBrowserHistory();

let socket = io('http://localhost:8001');
socket.on('TodoAdded', function (todo: Todo) {
  store.dispatch(addTodoSuccess(todo));
});
socket.on('TodoToggled', function (todo: Todo) {
  store.dispatch(toggleTodoSuccess(todo.id));
});

store.dispatch(loadTodos());

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App as any}>
        <Route component={HomePage}/>
        <Route path='todo' component={TodoPage}/>
        <Route path='about' component={AboutPage}/>
        <Route path='*' component={NotFoundPage}/>
      </Route>

    </Router>
  </Provider>, document.getElementById('app')
);
