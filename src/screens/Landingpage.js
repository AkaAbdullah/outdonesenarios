import React from "react";
import "./landingscreen.css";
import MainImage from "../components/MainImage";
import TypicalInput from "../components/TypicalInput";

const Landingpage = (props) => {
  return (
    <>
      <div className="maindiv">
        <div className="columns">
          <div className="div-prop column is-4 ">
            <p className="font-style ">
              Gift with <br />
              Confidence
            </p>
            <p className="slogan-paragraph">Special occasions are stressful.</p>
            <p className="slogan-paragraph">
              Outdone's Ai-powered gift recommender
            </p>
            <p className="slogan-paragraph">
              gives you one less thing to worry about.
            </p>
            <p className="slogan-paragraph">
              But don't just take our word for it...
            </p>
            <p className="question">How old is the person</p>
            <p className="question2">you're shopping for?</p>
            <TypicalInput />
            <div>
              <button onClick={props.data} className="continue-button">
                CONTINUE
              </button>
            </div>
          </div>
          <MainImage />
        </div>
      </div>
    </>
  );
};

export default Landingpage;

// onClick={() => {setPage((currPage) =>currPage +1)}}
