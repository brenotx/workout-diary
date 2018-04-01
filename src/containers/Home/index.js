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

export const TreeDots = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    margin-left: auto;
    margin-right: 0;

    &:hover {
        background-color: rgba(158, 158, 158, 0.2);
    }

    &:after {
        content: "\\2807";
        position: relative;
        left: 21%;
        font-size: 2.5em;
        vertical-align: middle;
        color: white;
    }
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
                    <TreeDots />
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
