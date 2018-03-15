import styled from "styled-components";

const AuthBox = styled.div`
    position: relative;
    margin: 10% auto;
    width: 19em;
    height: 25em;
    background: #fff;
    box-shadow: 0.125em 0.125em 0.3125em 0.0625em rgba(0, 0, 0, 0.2);
    border-radius: 0.1875em;

    @media (max-width: 480px) {
        position: fixed;
        margin: 0 auto;
        bottom: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        display: flex; // Removing the fucking space between divs.
        flex-direction: column;
    }
`;

export default AuthBox;
