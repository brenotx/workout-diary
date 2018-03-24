import React, { Component } from "react";
import { Link } from "react-router-dom";

import { SIGN_IN } from "../../constants/routes";
import FormContainer from "./FormContainer";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import ForgotLink from "./ForgotLink";

class Password extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormContainer>
                <span>
                    "Enter your email address and we'll send you a link so you can reset your
                    password."
                </span>
                <InputText hintText="email" type="email" />
                <ForgotLink>
                    <Link to={SIGN_IN}>Back to sign in</Link>
                </ForgotLink>
                <Button>Send a email</Button>
            </FormContainer>
        );
    }
}

export default Password;
