import React, { Component } from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar";
import H2 from "../../components/H2";

import menuIcon from "../../images/ic_menu_white_24px.svg";
import Drawer from "../../components/Drawer";
import Paper from "../../components/Paper/Paper";
import Menu from "../../components/Menu/Menu";
import MenuItem from "../../components/MenuItem/MenuItem";

import "./index.css";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
`;

// export const TreeDots = styled.div`
//     position: relative;
//     display: flex;
//     align-items: center;
//     width: 2em;
//     height: 2em;
//     border-radius: 50%;
//     margin-left: auto;
//     margin-right: 0;

//     &:hover {
//         background-color: rgba(158, 158, 158, 0.2);
//     }

//     &:after {
//         content: "\\2807";
//         position: relative;
//         left: 21%;
//         font-size: 2.5em;
//         vertical-align: middle;
//         color: white;
//     }
// `;

// const MdMenu = styled.div`
//     width: 100px;
//     height: 100px;
//     background-color: green;
// `;

class Logged extends Component {
    constructor(props) {
        super(props);

        // this.renderMenu = this.renderMenu.bind(this);
    }

    // renderMenu() {
    //     if (this.props.menuVisible) {
    //         return (

    //         );
    //     }
    //     return;
    // }

    render() {
        return (
            <div>
                <div className="menu-icon" />
                <div className={`wrap ${this.props.menuVisible ? "is-visible" : ""}`}>
                    <Paper zDepth={1}>
                        <Menu>
                            <MenuItem primaryText={"Refresh"} />
                            <MenuItem primaryText={"Settings"} />
                            <MenuItem primaryText={"Sign out"} />
                        </Menu>
                    </Paper>
                </div>
            </div>
        );
    }
}

// const Logged = props => {

//     toggleMenu() {
//         console.log
//     }

//     return (
//         <div className="wrap">
//             <div className="menu-icon" onClick={}/>
//             <div className="menu-item">
//                 <ul>
//                     <li>Sign out</li>
//                     <li>Sign out</li>
//                     <li>Sign out</li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

const HamburgerIcon = () => {
    return <img src={menuIcon} />;
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerVisible: false,
            menuVisible: false
        };

        this.toggleDrawerVisibility = this.toggleDrawerVisibility.bind(this);
        this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this);
    }

    toggleDrawerVisibility() {
        this.setState({ drawerVisible: !this.state.drawerVisible });
    }

    toggleMenuVisibility() {
        this.setState({ menuVisible: !this.state.menuVisible });
    }

    render() {
        const drawerContentClass = `drawer-content ${
            this.state.drawerVisible ? "drawer-opened" : ""
        }`;
        return (
            <Container>
                <AppBar
                    iconElementLeft={<HamburgerIcon />}
                    onLeftIconButtonClick={this.toggleDrawerVisibility}
                    title={<H2>Workout Diary</H2>}
                    iconElementRight={<Logged menuVisible={this.state.menuVisible} />}
                    onRightIconButtonClick={this.toggleMenuVisibility}
                />
                <Drawer drawerVisible={this.state.drawerVisible} />
                <div
                    className={drawerContentClass}
                    onClick={() => this.setState({ drawerVisible: false, menuVisible: false })}
                >
                    Content
                </div>
            </Container>
        );
    }
}

export default Home;
