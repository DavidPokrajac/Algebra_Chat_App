import React from "react";

class Footer extends React.Component {
    render() {
        return(
            <footer style={footerStyling}>
                <p><small>2021 &copy;David Pokrajac. <em>All rights reserved.</em></small></p>
            </footer>
        );
    }
}

const footerStyling = {
    textAlign: "center",
    height: "5vh",
    backgroundColor: "#075e54",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

export default Footer