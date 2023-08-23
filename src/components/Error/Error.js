import "./Error.css";
import React from "react";

const ErrorMessage = (props) => {
  return (
    <div>
      <div className="backdrop hidden"></div>
      <div typeof="alert" className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p className="h2 content">{props.message}</p>
          <button className="actions" onClick={props.onConfirm}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
