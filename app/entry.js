import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import MainRoutes from './routes';


ReactDOM.render(<Router>{MainRoutes}</Router>, document.getElementById('reactRoot'));