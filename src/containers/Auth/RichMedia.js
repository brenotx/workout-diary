import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding-top: 10%;

    & > img {
        height: 4.375em;
        width: 4.375em;
        display: block;
        margin: 0 auto;
    }

    @media (max-width: 480px) {
        padding-top: 0;
        height: 30%;
        margin: 0;
        background-color: #673ab7;
        box-shadow: 0.125em 0.125em 0.3125em 0.0625em rgba(0, 0, 0, 0.3);

        & > img {
            margin-top: 10%;
        }
    }
`;

const RichMedia = props => {
    return (
        <Container>
            <img src={props.imgSrc} />
        </Container>
    );
};

export default RichMedia;
