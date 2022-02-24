import React from "react";
import Typical from "react-typical";
import "./typicalinput.css";
import { useState } from "react";

const TypicalInput = (props) => {
  const [status, setStatus] = useState(false);
  const [userInput, setUserInput] = useState("");

  return (
    <div onClick={() => setStatus(true)} className="typicalstyle">
      {status ? (
        <input
          onChange={(e) => setUserInput(e.target.value)}
          className="inputmain"
          type="number"
          props={userInput}
        ></input>
      ) : (
        <Typical
          steps={["16", 1000, "25", 1000, "35", 1000, "18", 1000, "60", 1000]}
          loop={Infinity}
          wrapper="p"
        />
      )}
    </div>
  );
};

export default TypicalInput;
