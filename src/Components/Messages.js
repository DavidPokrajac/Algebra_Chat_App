import React from "react";
import "../styles/Messages.css";
import Timeline from "./Timeline";
import PropTypes from "prop-types";

function Messages(props) {
  
  const clickHandler = (e) => {
    e.target.classList.toggle("show-up-time");
  }
  
  const getDate = () => {
    const date = new Date();
    const options = { weekday: "long" }
    const day = new Intl.DateTimeFormat("hr-HR", options).format(date)
    return day + ", " + date.getDate() + "." + parseInt(date.getMonth() + 1) + "." + date.getFullYear();
  }
    
  const { messages } = props;
  const { currentUser } = props;
  
  return (
    <div>
      <Timeline vrijeme={getDate} />
      <ul>
        {messages.map((m, index) => {
          const {user, text, date} = m;
          const messageFromMe = user.id === currentUser.id;
          const className = messageFromMe ?
            "current" : "message";
          const clsName = className === "current" ?
            "text-area" : "other-text-area";
          const clsNameChild = clsName === "text-area" ?
            "arrow" : "other-arrow";
          const breakMessage = text.length > 20 ? "break" : "dont-break";
          const alignUsername = clsName === "text-area" ? "align-username-right" : "align-username-left";
          const timeBgColor = clsName === "text-area" ? "time" : "time-two";
          return (
            <li key={index} className={className}>
              <span
                className="avatar"
                style={{backgroundColor: user.clientData.color}}
              ></span>
              <div className={"message-content " + alignUsername}>
                <div className="username">
                  {user.clientData.username}
                </div>
                <div className={clsName + " " + breakMessage}>
                  <div className={clsNameChild}></div>
                  {text}
                </div>
                  <span onClick={clickHandler} className={timeBgColor} title="Hover over the time to remove/add it">{date}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

}

Messages.propTypes = {
  messages: PropTypes.array,
  currentMember: PropTypes.object
}

export default Messages;