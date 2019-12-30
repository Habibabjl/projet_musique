import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import MenuArtist from './components/MenuArtist.js'; 
import TopArtist from './components/TopArtist.js'; 
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker';

const routing = (
     <Router>
      <div>
        <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/MenuArtist">
           MenuArtist
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/TopArtist">
           TopArtist
          </NavLink>
        </li>
      </ul>
      <hr />
        <Switch>
            <Route path="/" component={App} />
            <Route path="/MenuArtist" component={MenuArtist} />
            <Route path="/TopArtist" component={TopArtist} />
            <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
