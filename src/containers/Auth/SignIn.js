import React, { Component } from 'react';

import styled from 'styled-components';

import AuthBox from './AuthBox';
import InputText from '../../components/InputText';

const AuthBoxH1 = styled.h1`
    margin: 0 0 20px 0;
    font-weight: 300;
    font-size: 28px;
`;

const SignIn = () => {
    return (
        <AuthBox>
            <InputText hintText="Email" type="email" errorMsg="Email invalido!" />
            <InputText hintText="Password" type="password" errorMsg="Password invalido!" />
        </AuthBox>
    );
};

export default SignIn;

// <AuthBox>
//     <AuthBoxH1>SignIn</AuthBoxH1>
//     <TextField
//         style={{ width: '100%' }}
//         hintText="Password Field"
//         floatingLabelText="Password"
//         type="password"
//     />
//     <br />
// </AuthBox>
