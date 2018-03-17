import styled from "styled-components";

const AuthDiv = styled.div`
    position: relative;
    margin: 10% auto;
    padding: 10px;
    width: 19em;
    height: 25em;
    background: #fff;
    box-shadow: 0.125em 0.125em 0.3125em 0.0625em rgba(0, 0, 0, 0.2);
    border-radius: 0.1875em;
    text-align: center;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 1em;
    font-weight: 400;
    line-height: 40px;
    color: #5e35b1;
    font-weight: 500;

    & > img {
        display: block;
        position: relative;
        width: 75px;
        height: 75px;
        margin: 10% auto;
    }

    & > span {
        font-size: 1.2em;
        text-align: center;
    }

    & > div {
        width: 90%;
        margin: 25% auto;
    }

    button {
        box-shadow: 0.125em 0.125em 0.3125em 0.0625em rgba(0, 0, 0, 0.2);
        border-radius: 2em;
        background-color: #673ab7;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    @media (max-width: 480px) {
        position: fixed;
        background-color: #673ab7;
        margin: 0 auto;
        bottom: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        display: flex; // Removing the fucking space between divs.
        flex-direction: column;
        color: #eceff1;

        button {
            border: 3px solid #fff;
        }
    }
`;

export default AuthDiv;
