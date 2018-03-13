import React, { Component } from "react";

import AuthBox from "./AuthBox";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import loginLogo from "../../images/user-256.png";

class SignIn extends Component {
    render() {
        return (
            <AuthBox>
                <img src={loginLogo} alt="Person Icon" />
                <InputText hintText="Email" type="email" />
                <InputText hintText="Password" type="password" />
                <Button>Sign in</Button>
            </AuthBox>
        );
    }
}

export default SignIn;
