import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";
import Container from "./Container";

const ERROR_MSG = {
    email: "Invalid email.",
    password: "Password must be at least 6 characters long."
};

class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            value: "",
            isDirty: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState(
            {
                value: e.target.value
            },
            () => this.props.onSubmit(this.props.type, this.state.value)
        );
    }

    handleBlur() {
        if (this.props.blurValidation) {
            this.setState({
                isDirty: true
            });
        }
    }

    render() {
        return (
            <Container className="input-text">
                <input
                    className={this.state.isDirty ? "is-dirty" : ""}
                    id={this.props.type}
                    type={this.props.type}
                    value={this.state.value}
                    minLength={this.props.type === "password" ? 6 : null}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    required={this.props.required}
                />
                <label htmlFor={this.props.type}>{this.props.hintText}</label>
                <span>{ERROR_MSG[this.props.type]}</span>
            </Container>
        );
    }
}

InputText.propTypes = {
    hintText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    required: PropTypes.bool,
    blurValidation: PropTypes.bool
};

InputText.defaultProps = {
    required: false,
    blurValidation: false
};

export default InputText;
