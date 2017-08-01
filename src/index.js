import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import './css/bulma.css';
import SearchPage from './components/pages/SearchPage';
import RepoPage from './components/pages/RepoPage';
import reducer from './reducer/reducer';
import NavBar from './components/pages/NavBar';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const history = createBrowserHistory();

ReactDom.render(
    <Provider store={store}>
    <Router history={history}>
        <NavBar>
        <Switch>
        <Route exact={true} path='/' component={SearchPage} />
        <Route path='/repos/:user/:name' component={RepoPage} /> 
        </Switch>
        </NavBar>
    </Router>
    </Provider>
    , document.getElementById('app'));