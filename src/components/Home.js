import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer pt-5">
      <img src={require("../images/cocktail.png")} className="logoImage" />
      <h1 className="display-1">Nice Cocktail</h1>
      <Link to="/cocktails" id="getStarted">
        <Button id="getStartedButton" variant="dark">Get Started</Button>
      </Link>
    </div>
  );
};

export default Home;
