import React, { Component } from "react";

import "./index.css";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };

        // this.onClick = this.onClick.bind(this);
        this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
        this.handleOnMouseUp = this.handleOnMouseUp.bind(this);
        this.setButtonClass = this.setButtonClass.bind(this);
    }

    // handleOnClick() {
    //     this.props.onClick()
    // }

    handleOnMouseDown() {
        this.setState({ isClicked: true });
    }

    handleOnMouseUp() {
        this.setState({ isClicked: false });
    }

    setButtonClass() {
        return this.state.isClicked ? "is-clicked" : null;
    }

    render() {
        return (
            <button
                className={this.setButtonClass()}
                onClick={this.props.onClick}
                onMouseDown={this.handleOnMouseDown}
                onMouseUp={this.handleOnMouseUp}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;
