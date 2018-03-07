import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const ERROR_MSG = {
    email: 'Invalid email.',
    password: 'Password must be at least 6 characters long.'
}

class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            value: '',
            isDirty: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleBlur() {
        this.setState({
            isDirty: true,
        });
    }

    render() {
        return (
            <form>
                <input className={this.state.isDirty ? 'is-dirty' : ''}
                    id={this.props.type}
                    type={this.props.type}
                    value={this.state.value}
                    minlength={this.props.type === 'password' ? 6 : null}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    required
                />
                <label htmlFor={this.props.type}>{this.props.hintText}</label>
                <span>{ERROR_MSG[this.props.type]}</span>
            </form>
        );
    }
}

InputText.propTypes = {
    hintText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default InputText;
