import React, { Component } from 'react';

import styled from 'styled-components';

import AuthBox from './AuthBox';
import InputText from '../../components/InputText';

const SignIn = () => {
    return (
        <AuthBox>
            <InputText hintText="Email" type="email" />
            <InputText hintText="Password" type="password" />
        </AuthBox>
    );
};

export default SignIn;
