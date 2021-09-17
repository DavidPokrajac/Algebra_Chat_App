import React from "react";
import PropTypes from "prop-types";

function Timeline(props) {
    return <span style={style}>{props.vrijeme()}</span>;
}

const style = {
    textAlign: "center",
    display: "block",
    margin: "1em auto",
    backgroundColor: "#85c1e9",
    width: "150px",
    borderRadius: "20px",
    padding: "0.4em 0.8em",
    fontStyle: "italic"
}

Timeline.propTypes = {
    vrijeme: PropTypes.func
}

export default Timeline;