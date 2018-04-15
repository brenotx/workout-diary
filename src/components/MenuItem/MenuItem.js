import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const MenuItem = props => {
    return (
        <div>
            <span className="menu-item">{props.primaryText}</span>
        </div>
    );
};

MenuItem.propTypes = {
    primaryText: PropTypes.string.isRequired
};

MenuItem.defaultProps = {
    // zDepth: 1
};
export default MenuItem;
