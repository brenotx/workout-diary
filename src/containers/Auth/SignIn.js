import React, { Component } from "react";
import { Link } from "react-router-dom";

import FormContainer from "./FormContainer";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import ForgotLink from "./ForgotLink";

import { auth } from "../../firebase";

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

    handleSubmit(email, password) {}

    render() {
        return (
            <FormContainer>
                <InputText
                    hintText="Email"
                    type="email"
                    onSubmit={this.setInputValue}
                    required={true}
                    // blurValidation={true}
                />
                <InputText
                    hintText="Password"
                    type="password"
                    onSubmit={this.setInputValue}
                    required={true}
                />
                <ForgotLink>
                    <Link to="/auth/password">Forgot Password?</Link>
                </ForgotLink>
                <Button onClick={() => this.handleSubmit(this.state.email, this.state.password)}>
                    Sign in
                </Button>
                <span>
                    Don't have an account yet? <Link to="/auth/signup">Sign up</Link>
                </span>
            </FormContainer>
        );
    }
}

export default SignIn;
