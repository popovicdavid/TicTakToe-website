import "../styles/SBStyle.css";
import React, { useState } from "react";
import "../styles/Buttoncontainer.css";


const SquareButton = () => {
  const [character, setCharacter] = useState("empty");

  const handleClick = () => {
    setCharacter("x");
  };
  return (
    <button className="SBStyle" onClick={handleClick}>
      {character}
    </button>
  );
};

export default SquareButton;
