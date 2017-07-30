import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import './css/bulma.css';
import SearchPage from './components/pages/SearchPage';
import reducer from './reducer/reducer';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const history = createBrowserHistory();

ReactDom.render(
    <Provider store={store}>
    <Router history={history}>
        <Route path='/search' component={SearchPage} />
    </Router>
    </Provider>
    , document.getElementById('app'));