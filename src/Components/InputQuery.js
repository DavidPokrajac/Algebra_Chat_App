import React from "react";
import modules from "../styles/InputQuery.module.css";
import PropTypes from "prop-types";

function Input(props) {

    const [value, setValue] = React.useState("");
    
    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setValue("");
        props.onSendMessage(value);
    }

    return(
        <form onSubmit={onSubmitHandler} className={modules.myForm}>
            <input
                type="text"
                onChange={onChangeHandler} 
                value={value} 
                placeholder="Enter some value"
                required
            />
            <button>Send</button>
        </form>
    );
}

Input.propTypes = {
    onSendMessage: PropTypes.func
}

export default Input;