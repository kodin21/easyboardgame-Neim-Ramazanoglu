import React from "react";
import "./Char.css";

function Char({ source, id }) {
  return (
    <div>
      <img className="char" id={id} src={source}></img>
    </div>
  );
}
export default Char;
