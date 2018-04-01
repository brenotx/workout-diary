import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import AuthBox from "./AuthBox";
import AuthDiv from "./AuthDiv";
import RichMedia from "./RichMedia";
import * as routes from "../../constants/routes";
import loginLogo from "../../images/user-256.png";
import authLogo from "../../images/md-dumbbell.png";
import SignIn from "./SignIn";
import Password from "./Password";
import SignUp from "./SignUp";

class Auth extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path={routes.AUTH}
                    render={() => (
                        <AuthDiv>
                            <img src={authLogo} alt="Auth Icon" />
                            <span>Workout Diary</span>
                            <div>
                                <Link to={routes.SIGN_IN}>
                                    <button>Sign in</button>
                                </Link>
                                <Link to={routes.SIGN_UP}>
                                    <button>Sign up</button>
                                </Link>
                            </div>
                        </AuthDiv>
                    )}
                />
                <Route path={`${routes.AUTH}/:authId`}>
                    <AuthBox>
                        <RichMedia imgSrc={loginLogo} />
                        <Route path={routes.SIGN_IN} component={SignIn} />
                        <Route path={routes.SIGN_UP} component={SignUp} />
                        <Route path={routes.PASSWORD} component={Password} />
                    </AuthBox>
                </Route>
            </Switch>
        );
    }
}

export default Auth;
