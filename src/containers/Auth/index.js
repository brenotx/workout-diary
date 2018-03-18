import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import AuthBox from "./AuthBox";
import AuthDiv from "./AuthDiv";
import RichMedia from "./RichMedia";

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
                    path={this.props.match.url}
                    render={() => (
                        <AuthDiv>
                            <img src={authLogo} alt="Auth Icon" />
                            <span>Workout Diary</span>
                            <div>
                                <Link to={`${this.props.match.url}/signin`}>
                                    <button>Sign in</button>
                                </Link>
                                <Link to={`${this.props.match.url}/signup`}>
                                    <button>Sign up</button>
                                </Link>
                            </div>
                        </AuthDiv>
                    )}
                />
                <Route path={`${this.props.match.url}/:authId`}>
                    <AuthBox>
                        <RichMedia>
                            <img src={loginLogo} alt="Person Icon" />
                        </RichMedia>
                        <Route path={`${this.props.match.url}/signin`} component={SignIn} />
                        <Route path={`${this.props.match.url}/signup`} component={SignUp} />
                        <Route path={`${this.props.match.url}/password`} component={Password} />
                    </AuthBox>
                </Route>
            </Switch>
        );
    }
}

export default Auth;
