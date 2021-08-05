import React from "react";
import "./GameArea.css";
import Char from "../Char/Char";
import Header from "../Header/Header";

function GameArea({ value }) {
  const [user, setUser] = React.useState([]);
  fetch("charData.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else console.log("errorss");
    })
    .then((data) => {
      setUser(data);
    })
    .catch((err) => {
      console.log("error: ", err);
    });

  return (
    <div className="container">
      {user &&
        user.map((d) => {
          if (value == d.id) {
            return <Char id={d.id} source={d.src} />;
          }
        })}
    </div>
  );
}

export default GameArea;
