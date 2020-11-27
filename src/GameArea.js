import React from "react";



const gamearea = props =>
  props.show ? (
    <div onClick={props.clicked}>
      {props.children}{" "}
    </div>
  ) : null;

  

export default gamearea;