import React, { Component } from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar";
import H2 from "../../components/H2";

import menuIcon from "../../images/ic_menu_white_24px.svg";

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
`;

class Home extends Component {
    render() {
        return (
            <Container>
                <AppBar>
                    <img src={menuIcon} />
                    <H2>Workout Diary</H2>
                </AppBar>
            </Container>
        );
    }
}

export default Home;
