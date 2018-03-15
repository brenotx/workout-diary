import React, { Component } from "react";

import AuthBox from "./AuthBox";
import RichMedia from "./RichMedia";
import FormContainer from "./FormContainer";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import loginLogo from "../../images/user-256.png";

const INITIAL_STATE = {
    username: "",
    email: "",
    password: "",
    error: null
};

class SignIn extends Component {
    constructor() {
        super();
        this.state = { ...INITIAL_STATE };

        this.setInputValue = this.setInputValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setInputValue(type, value) {
        this.setState({ [type]: value });
    }

    handleSubmit() {}

    render() {
        return (
            <AuthBox>
                <RichMedia>
                    <img src={loginLogo} alt="Person Icon" />
                </RichMedia>
                <FormContainer>
                    <InputText
                        hintText="Email"
                        type="email"
                        onSubmit={this.setInputValue}
                        requred={true}
                        // blurValidation={true}
                    />
                    <InputText
                        hintText="Password"
                        type="password"
                        onSubmit={this.setInputValue}
                        requred={true}
                    />
                    <Button onClick={this.handleSubmit}>Sign in</Button>
                </FormContainer>
            </AuthBox>
        );
    }
}

export default SignIn;
