import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import AppRoutes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';

let history = createBrowserHistory();

ReactDOM.render(<Router history={history}>{AppRoutes}</Router>, document.getElementById('react-root'));