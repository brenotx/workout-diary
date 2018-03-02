import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'sanitize.css/sanitize.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
