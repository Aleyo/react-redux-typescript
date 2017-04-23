import * as React from 'react';
import { Link  } from 'react-router-dom';

interface AppProps {
  children: React.ReactNode;
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
        {children}
      </div>
    );
  }
};
