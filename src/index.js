import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import 'animate.css/animate.min.css';
import 'sanitize.css/sanitize.css';

import HomePage from './containers/HomePage';

import './global-styles';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HomePage} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
