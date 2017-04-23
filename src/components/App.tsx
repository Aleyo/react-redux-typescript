import * as React from 'react';
import { Link  } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { TodoPage } from './todo/TodoPage';
import { AboutPage } from './about/AboutPage';
import { NotFoundPage } from './notfound/NotFoundPage';

interface AppProps {
  children?: React.ReactNode;
}

export class App extends React.Component<AppProps, any> {
  render() {

    let {children} = this.props;

    return (
      <div>
        <nav className='navbar navbar-inverse navbar-static-top'>
          <div className='container-fluid'>

            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' aria-expanded='false'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <span className='navbar-brand'><Link to='/'><i className='glyphicon glyphicon-home' /></Link></span>
            </div>

            <div className='collapse navbar-collapse'>
              <ul className='nav navbar-nav'>
                <li><Link to='/todo'>Todos</Link></li>
                <li><Link to='/about'>About</Link></li>
              </ul>
            </div>

          </div>
        </nav>

        <br/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path='/todo' component={TodoPage}/>
          <Route path='/about' component={AboutPage}/>
          <Route path='*' component={NotFoundPage}/>
        </Switch>
      </div>
    );
  }
};
