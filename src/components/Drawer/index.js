import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

class Drawer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="drawer" style={{ width: this.props.drawerVisible ? "70%" : "0" }}>
                <div>Breno</div>
                Drawer
            </div>
        );
    }
}

Drawer.propTypes = {
    drawerVisible: PropTypes.bool.isRequired
};

export default Drawer;
