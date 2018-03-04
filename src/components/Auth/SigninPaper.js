import React, { Component } from 'react';

import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const RelaviteDiv = styled.div``;

const StyledPaper = styled(Paper)`
    margin: auto;
    width: 50%;
    padding: 10px;
    height: 200px;
    margin-top: 100px;
`;

// const SignIn = () => {
//     return <Paper style={style} zDepth={2} rounded={false} />;
// };
const SignInPaper = () => {
    return (
        <RelaviteDiv>
            <StyledPaper zDepth={1} rounded={false} />
        </RelaviteDiv>
    );
};

export default SignInPaper;
