import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "sanitize.css/sanitize.css";

import "./index.css";
import App from "./containers/App";
import Auth from "./containers/Auth";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <Router>
        <App>
            <Route path="/auth" component={Auth} />
        </App>
    </Router>,
    document.getElementById("root")
);
registerServiceWorker();
