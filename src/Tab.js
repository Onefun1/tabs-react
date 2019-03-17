import React from "react";

function Tab(props) {
  return (
    <div className="btn" onClick={props.onClick}>
      <button>{props.title}</button>
    </div>
  );
}

export default Tab;
