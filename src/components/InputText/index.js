import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            value: '',
            isValid: true,
            isDirty: false,
            errorMsg: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.setInputDirty = this.setInputDirty.bind(this);
        this.setInputClass = this.setInputClass.bind(this);
    }

    validate() {
        if (this.state.value.length === 0) return false;

        switch (this.props.type) {
            case 'email':
                const emailValid = this.state.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                this.setState({ errorMsg: 'Invalid email.' });
                return emailValid ? true : false;
                break;
            case 'password':
                const pwdValid = this.state.value.length >= 6 ? true : false;
                this.setState({ errorMsg: 'Password must be at least 6 characters long.' });
                return pwdValid;
            default:
                return true;
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    setInputDirty() {
        this.setState({
            isDirty: true,
            isValid: this.validate()
        });
    }

    setInputClass() {
        const dirty = this.state.isDirty ? 'dirty' : '';
        const invalid = !this.state.isValid ? 'invalid' : '';
        return `${dirty} ${invalid}`;
    }

    render() {
        return (
            <div className="md-textfield">
                <input
                    className={this.setInputClass()}
                    type={this.props.type}
                    value={this.state.value}
                    onChange={this.handleChange}
                    onBlur={this.setInputDirty}
                    required
                />
                <label htmlFor="" className="">
                    {this.props.hintText}
                </label>
                <span className="md-textfield-error">{!this.state.isValid ? this.state.errorMsg : ''}</span>
            </div>
        );
    }
}

InputText.propTypes = {
    hintText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default InputText;
