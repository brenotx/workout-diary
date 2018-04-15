import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

const Paper = props => {
    // TODO: Remove it from here.
    const zDepthShadows = [
        [1, 6, 0.12, 1, 4, 0.12],
        [3, 10, 0.16, 3, 10, 0.23],
        [10, 30, 0.19, 6, 10, 0.23],
        [14, 45, 0.25, 10, 18, 0.22],
        [19, 60, 0.3, 15, 20, 0.22]
    ].map(
        d =>
            `0 ${d[0]}px ${d[1]}px rgba(0, 0, 0, ${d[2]}),
             0 ${d[3]}px ${d[4]}px rgba(0, 0, 0, ${d[5]})`
    );

    const paperStyle = {
        boxShadow: zDepthShadows[props.zDepth - 1]
    };

    return (
        <div className="paper" style={paperStyle}>
            {props.children}
        </div>
    );
};

Paper.propTypes = {
    zDepth: PropTypes.oneOf([0, 1, 2, 3, 4, 5])
};

Paper.defaultProps = {
    zDepth: 1
};

export default Paper;
