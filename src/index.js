import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'sanitize.css/sanitize.css';

import './index.css';
import App from './App';
import SignIn from './components/Auth/SignIn.js';
import InputText from './components/InputText';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <App>
            <Route path="/signIn" component={SignIn} />
        </App>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
