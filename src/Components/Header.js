import React from "react";
import PropTypes from "prop-types";
import "../styles/Header.css";

class Header extends React.Component {
    render() {
        return(
            <header>
                <h1>Chat Aplikacija</h1>
                <span>Izradio: {this.props.polaznik}</span>
            </header>
        );
    }
}

Header.propTypes = {
    polaznik: PropTypes.string
}

export default Header;