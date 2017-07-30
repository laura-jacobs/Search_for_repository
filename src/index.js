import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import SearchPage from './components/pages/SearchPage';

ReactDom.render(
    <Router>
        <Route path='/search' component={SearchPage} />
    </Router>, document.getElementById('app'));