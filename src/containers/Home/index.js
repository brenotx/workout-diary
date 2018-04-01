import React, { Component } from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar";
import H2 from "../../components/H2";

import menuIcon from "../../images/ic_menu_white_24px.svg";
import Drawer from "../../components/Drawer";
import "./index.css";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
`;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerVisible: false };
    }

    render() {
        const drawerContentClass = `drawer-content ${
            this.state.drawerVisible ? "drawer-opened" : ""
        }`;
        return (
            <Container>
                <AppBar>
                    <img
                        src={menuIcon}
                        onClick={() => this.setState({ drawerVisible: !this.state.drawerVisible })}
                    />
                    <H2>Workout Diary</H2>
                </AppBar>
                <Drawer drawerVisible={this.state.drawerVisible} />
                <div
                    className={drawerContentClass}
                    onClick={() => this.setState({ drawerVisible: false })}
                >
                    Content
                </div>
            </Container>
        );
    }
}

export default Home;
