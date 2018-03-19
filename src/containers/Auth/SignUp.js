import React, { Component } from "react";
import { Link } from "react-router-dom";

import FormContainer from "./FormContainer";
import InputText from "../../components/InputText";
import Button from "../../components/Button";

import { auth } from "../../firebase";

const INITIAL_STATE = {
    username: "",
    email: "",
    password: "",
    error: null
};

class SignUp extends Component {
    constructor() {
        super();
        this.state = { ...INITIAL_STATE };

        this.setInputValue = this.setInputValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setInputValue(type, value) {
        this.setState({ [type]: value });
    }

    handleSubmit(email, password) {
        console.log("Email: " + email);
        console.log("Password: " + password);

        // const { email, password } = this.state;

        auth
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState(() => ({ ...INITIAL_STATE }));
            })
            .catch(error => {
                this.setState({ error: error });
            });

        // event.preventDefault();
    }

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
                <Button onClick={() => this.handleSubmit(this.state.email, this.state.password)}>
                    Sign in
                </Button>
                <span>
                    Already have an account? <Link to="/auth/signin">Sign In</Link>
                </span>
            </FormContainer>
        );
    }
}

export default SignUp;
