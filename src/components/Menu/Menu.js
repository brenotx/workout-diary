import React from "react";
import PropTypes from "prop-types";

const style = {
    display: "table-cell",
    paddingBottom: 8,
    paddingTop: 8,
    userSelect: "none"
};

const Menu = props => {
    return <div style={style}>{props.children}</div>;
};

// Menu.propTypes = {
//     primaryText: PropTypes.string.isRequired
// };

// Menu.defaultProps = {
//     // zDepth: 1
// };

export default Menu;
