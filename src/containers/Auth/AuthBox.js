import React from "react";
import styled from "styled-components";

const AuthBox = styled.div`
    position: relative;
    margin: 15% auto;
    width: 300px;
    height: 400px;
    padding: 2em;
    background: #fff;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
    border-radius: 3px;

    & > img {
        height: 70px;
        width: 70px;
        display: block;
        margin: 10px auto 40px;
    }
`;

export default AuthBox;
