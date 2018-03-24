import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "sanitize.css/sanitize.css";

import "./index.css";
import * as routes from "./constants/routes";
import App from "./containers/App";
import Auth from "./containers/Auth";
import registerServiceWorker from "./registerServiceWorker";
import Home from "./containers/Home";

ReactDOM.render(
    <Router>
        <App>
            {/* <Redirect from="/" to="/auth" /> */}
            <Route path={routes.AUTH} component={Auth} />
            <Route path={routes.HOME} component={Home} />
        </App>
    </Router>,
    document.getElementById("root")
);
registerServiceWorker();
