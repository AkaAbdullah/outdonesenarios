import React from "react";
import NavigationBar from "../components/NavigatiionBar.jsx";
import { useState } from "react";
import Step2 from "../components/Form/Step2";
import Landingpage from "./Landingpage.js";
import Form from "../components/Form/Form.jsx";

const MainScreen = (props) => {
  const [page, setPage] = useState(0);
  const PageDisplay = () => {
    if (page === 0) {
      return <Landingpage data={parentToChild} />;
    } else if (page === 1) {
      return <Form data={continue2} />;
    } else if (page === 2) {
      return <Step2 />;
    }
  };
  //This is the function passing to the landing page through props
  const parentToChild = () => {
    console.log(props);
    if (props.data != 0) {
      setPage(1);
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  const continue2 = () => {
    setPage((currPage) => currPage + 1);
  };

  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <div>{PageDisplay()}</div>
      <div className="has-text-centered"></div>
    </>
  );
};

export default MainScreen;
