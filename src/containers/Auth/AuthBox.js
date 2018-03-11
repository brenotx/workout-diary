import React from "react";
import styled from "styled-components";

const AuthBox = styled.div`
    position: relative;
    margin: 10% auto;
    width: 19em;
    height: 25em;
    padding: 2em;
    background: #fff;
    box-shadow: 0.125em 0.125em 0.3125em 0.0625em rgba(0, 0, 0, 0.2);
    border-radius: 0.1875em;

    & > img {
        height: 4.375em;
        width: 4.375em;
        display: block;
        margin: 0.625em auto 2.5em;
    }
`;

export default AuthBox;
