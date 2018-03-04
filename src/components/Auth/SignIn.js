import React, { Component } from 'react';

import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import SigninPaper from './SigninPaper';
import AuthBox from './AuthBox';
import InputText from '../InputText';

const AuthBoxH1 = styled.h1`
    margin: 0 0 20px 0;
    font-weight: 300;
    font-size: 28px;
`;

const SignIn = () => {
    return (
        <div>
            <InputText hintText="Email" type="email" errorMsg="Email invalido!" />
            <InputText hintText="Password" type="password" errorMsg="Password invalido!" />
        </div>
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
