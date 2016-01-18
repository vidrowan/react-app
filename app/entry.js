import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import MainRoutes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';

let history = createBrowserHistory();

ReactDOM.render(<Router history={history}>{MainRoutes}</Router>, document.getElementById('react-root'));