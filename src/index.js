import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'sanitize.css/sanitize.css';

import './index.css';
import App from './App';
import SignIn from './components/Auth/SignIn.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/signIn" component={SignIn} />
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
